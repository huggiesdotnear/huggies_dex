import { util } from "near-sdk-as";
import { html } from "./html";
import { js } from "./sw";
import { jsonText } from "./manifest"; // use raw manifest text
import { svg } from "./svg";
// ===========================================================
@nearBindgen
class Web4Request {
  accountId?: string | null;
  path?: string;
  params?: Map<string, string>;
  query?: Map<string, Array<string>>;
  preloads?: Map<string, Web4Response>;
}
@nearBindgen
class Web4Response {
  contentType?: string;
  status?: u32;
  body?: Uint8Array;
  bodyUrl?: string;
  preloadUrls: string[] = [];
}
// ===========================================================
function htmlResponse(text: string): Web4Response {
  return {
    contentType: "text/html; charset=UTF-8",
    body: util.stringToBytes(text),
    status: 200,
  } as Web4Response;
}
function jsonResponse(text: string): Web4Response {
  return {
    contentType: "application/json; charset=UTF-8",
    body: util.stringToBytes(text),
    status: 200,
  } as Web4Response;
}
function svgResponse(text: string): Web4Response {
  return {
    contentType: "image/svg+xml; charset=UTF-8",
    body: util.stringToBytes(text),
    status: 200,
  } as Web4Response;
}
function jsResponse(text: string): Web4Response {
  return {
    contentType: "application/javascript; charset=UTF-8",
    body: util.stringToBytes(text),
    status: 200,
  } as Web4Response;
}

function status(status: u32): Web4Response {
  return { status } as Web4Response;
}
// ===========================================================
export function web4_get(request: Web4Request): Web4Response {
  const path = request.path ? request.path : "/";

  if (path == "/") {
    return htmlResponse(decodeURI(html));
  }
  if (path == "/manifest.json") {
    return jsonResponse(jsonText);
  }
  if (path == "/shit_icon_blue.svg") {
    return svgResponse(svg);
  }
  if (path == "/sw.js") {
    return jsResponse(js);
  }

  return status(404);
}
// ===========================================================
// ===========================================================
// copyright 2025 by sleet.near
