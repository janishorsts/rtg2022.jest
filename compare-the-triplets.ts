import { WriteStream, createWriteStream } from "fs";
process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString: string = "";
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on("data", function (inputStdin: string): void {
  inputString += inputStdin;
});

process.stdin.on("end", function (): void {
  inputLines = inputString.split("\n");
  inputString = "";

  main();
});

function readLine(): string {
  return inputLines[currentLine++];
}

/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

export function compareTriplets(a: number[], b: number[]): [number, number] {
  // Write your code here
  let aliceScore = 0;
  let bobScore = 0;

  a.forEach((v, i) => {
    if (v > b[i]) {
      aliceScore++;
    } else if (v < b[i]) {
      bobScore++;
    }
  });

  return [aliceScore, bobScore];
}

function main() {
  const ws: WriteStream = createWriteStream(
    process.env["OUTPUT_PATH"] || "output.txt"
  );

  const a: number[] = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((aTemp) => parseInt(aTemp, 10));

  const b: number[] = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((bTemp) => parseInt(bTemp, 10));

  const result: number[] = compareTriplets(a, b);

  ws.write(result.join(" ") + "\n");

  ws.end();
}
