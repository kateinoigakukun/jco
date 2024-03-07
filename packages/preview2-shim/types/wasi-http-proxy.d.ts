import { WasiCliStderr } from './interfaces/wasi-cli-stderr.js';
import { WasiCliStdin } from './interfaces/wasi-cli-stdin.js';
import { WasiCliStdout } from './interfaces/wasi-cli-stdout.js';
import { WasiClocksMonotonicClock } from './interfaces/wasi-clocks-monotonic-clock.js';
import { WasiClocksWallClock } from './interfaces/wasi-clocks-wall-clock.js';
import { WasiHttpOutgoingHandler } from './interfaces/wasi-http-outgoing-handler.js';
import { WasiHttpTypes } from './interfaces/wasi-http-types.js';
import { WasiIoError } from './interfaces/wasi-io-error.js';
import { WasiIoPoll } from './interfaces/wasi-io-poll.js';
import { WasiIoStreams } from './interfaces/wasi-io-streams.js';
import { WasiRandomRandom } from './interfaces/wasi-random-random.js';
import { WasiHttpIncomingHandler } from './interfaces/wasi-http-incoming-handler.js';
export const incomingHandler: typeof WasiHttpIncomingHandler;