import { TsGeneratorPlugin, TFileDesc, TContext, getRelativeModulePath } from "ts-generator";
import { join, dirname, parse } from "path";
import { codegen, getRuntime } from "./target/typechain";
import { extractAbi } from "./parser/abiParser";

export interface ITypechainCfg {
  outDir?: string;
}

export class Typechain extends TsGeneratorPlugin {
  name = "Typechain";

  private readonly outDirAbs?: string;
  private runtimePathAbs?: string;

  constructor(ctx: TContext<ITypechainCfg>) {
    super(ctx);

    const { cwd, rawConfig } = ctx;

    if (rawConfig.outDir) {
      this.outDirAbs = join(cwd, rawConfig.outDir);
      this.runtimePathAbs = buildRuntimePath(this.outDirAbs);
    }
  }

  transformFile(file: TFileDesc): TFileDesc | void {
    const fileDirPath = dirname(file.path);
    if (!this.runtimePathAbs) {
      this.runtimePathAbs = buildRuntimePath(fileDirPath);
    }

    const outDir = this.outDirAbs || fileDirPath;

    const fileName = parse(file.path).name;
    const outputFilePath = join(outDir, `${fileName}.ts`);
    const relativeRuntimePath = getRelativeModulePath(outputFilePath, this.runtimePathAbs);

    const abi = extractAbi(file.contents);
    if (abi.length === 0) {
      return;
    }

    const wrapperContents = codegen(abi, { fileName, relativeRuntimePath });

    return {
      path: outputFilePath,
      contents: wrapperContents,
    };
  }

  afterRun(): TFileDesc | void {
    if (this.runtimePathAbs) {
      return {
        path: this.runtimePathAbs,
        contents: getRuntime(),
      };
    }
  }
}

function buildRuntimePath(dirPath: string): string {
  return join(dirPath, "typechain-runtime.ts");
}