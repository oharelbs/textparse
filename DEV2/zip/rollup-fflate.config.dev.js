import { nodeResolve } from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import fs from "fs";

export default [{
	input: "lib/z-worker-fflate.js",
	output: [{
		file: "lib/z-worker-inline.js",
		format: "umd"
	}],
	plugins: [nodeResolve()]
}, {
	input: "lib/z-worker-inline-template.js",
	output: [{
		file: "lib/z-worker-inline.js",
		format: "es"
	}],
	plugins: [
		replace({
			preventAssignment: true,
			"__workerCode__": () => fs.readFileSync("lib/z-worker-inline.js").toString()
		})
	]
}, {
	input: ["lib/zip.js"],
	output: [{
		file: "dist/zip.min.js",
		format: "umd",
		name: "zip"
	}, {
		file: "dist/zip.js",
		format: "umd",
		name: "zip"
	}],
	plugins: [nodeResolve()]
}, {
	input: ["lib/zip-full-fflate.js"],
	output: [{
		file: "dist/zip-full.min.js",
		format: "umd",
		name: "zip"
	}, {
		file: "dist/zip-full.js",
		format: "umd",
		name: "zip"
	}],
	plugins: [nodeResolve()]
}, {
	input: "lib/zip-no-worker-fflate.js",
	output: [{
		file: "dist/zip-no-worker.min.js",
		format: "umd",
		name: "zip"
	}],
	plugins: [nodeResolve()]
}, {
	input: "lib/zip-no-worker-fflate-deflate.js",
	output: [{
		file: "dist/zip-no-worker-deflate.min.js",
		format: "umd",
		name: "zip"
	}],
	plugins: [nodeResolve()]
}, {
	input: "lib/zip-no-worker-fflate-inflate.js",
	output: [{
		file: "dist/zip-no-worker-inflate.min.js",
		format: "umd",
		name: "zip"
	}],
	plugins: [nodeResolve()]
}, {
	input: "lib/zip-fs.js",
	output: [{
		file: "dist/zip-fs.min.js",
		format: "umd",
		name: "zip"
	}, {
		file: "dist/zip-fs.js",
		format: "umd",
		name: "zip"
	}],
	plugins: [nodeResolve()]
}, {
	input: "index-fflate.js",
	output: [{
		file: "dist/zip-fs-full.min.js",
		format: "umd",
		name: "zip"
	}, {
		file: "dist/zip-fs-full.js",
		format: "umd",
		name: "zip"
	}],
	plugins: [nodeResolve()]
}, {
	input: "lib/z-worker.js",
	output: [{
		file: "dist/z-worker.js",
		format: "iife"
	}],
	plugins: [nodeResolve()]
}];