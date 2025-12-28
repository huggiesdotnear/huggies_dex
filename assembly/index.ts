import { util } from "near-sdk-as";
import { html } from "./html";
import { sw } from "./sw";
import { jsonText } from "./manifest"; // use raw manifest text
import { svg } from "./svg";
// Import all additional assets
import { asset_static_js_404_50274563_js } from "./asset_static_js_404_50274563_js";
import { asset_static_js_async_262_523c5fd2_js } from "./asset_static_js_async_262_523c5fd2_js";
import { asset_static_js_index_a06e7fca_js } from "./asset_static_js_index_a06e7fca_js";
import { asset_static_css_index_7662d085_css } from "./asset_static_css_index_7662d085_css";
import { asset_static_js_404_50274563_js_LICENSE_txt } from "./asset_static_js_404_50274563_js_LICENSE_txt";
import { asset_shit_icon_blue_svg } from "./asset_shit_icon_blue_svg";
import { asset_sw_js } from "./asset_sw_js";
import { asset_manifest_json } from "./asset_manifest_json";
import { asset_index_html } from "./asset_index_html";
// ===========================================================
@nearBindgen
class Web4Request {
  accountId: string | null;
  path: string;
  params: Map<string, string>;
  query: Map<string, Array<string>>;
  preloads: Map<string, Web4Response>;
}
@nearBindgen
class Web4Response {
  contentType: string;
  status: u32;
  body: Uint8Array;
  bodyUrl: string;
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

  // Handle specific paths first
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
    return jsResponse(sw);
  }

  // Handle static assets
  if (path == "/static/js/404.50274563.js") {
    return jsResponse(asset_static_js_404_50274563_js);
  }
  if (path == "/static/js/async/262.523c5fd2.js") {
    return jsResponse(asset_static_js_async_262_523c5fd2_js);
  }
  if (path == "/static/js/index.a06e7fca.js") {
    return jsResponse(asset_static_js_index_a06e7fca_js);
  }
  if (path == "/static/css/index.7662d085.css") {
    return {
      contentType: "text/css; charset=UTF-8",
      body: util.stringToBytes(asset_static_css_index_7662d085_css),
      status: 200,
    } as Web4Response;
  }
  if (path == "/static/js/404.50274563.js.LICENSE.txt") {
    return {
      contentType: "text/plain; charset=UTF-8",
      body: util.stringToBytes(asset_static_js_404_50274563_js_LICENSE_txt),
      status: 200,
    } as Web4Response;
  }

  return htmlResponse(decodeURI(html));
}
// ===========================================================
// ===========================================================
// copyright 2025 by sleet.near
