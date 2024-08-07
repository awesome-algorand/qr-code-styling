import QRCodeStyling from "./QRCodeStyling";
import fs from "fs";
import path from "path";
import nodeCanvas from "canvas";
import { JSDOM } from "jsdom";
describe("Test QRCodeStyling class", function () {
    beforeAll(function () {
        global.document.body.innerHTML = "<div id='container'></div>";
    });
    it("The README example should work correctly", function (done) {
        var expectedQRCodeFile = fs.readFileSync(path.resolve(__dirname, "../assets/test/image_from_readme.png"), "base64");
        var qrCode = new QRCodeStyling({
            width: 300,
            height: 300,
            data: "TEST",
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAEUlEQVR42mNk+M+AARiHsiAAcCIKAYwFoQ8AAAAASUVORK5CYII=",
            dotsOptions: {
                color: "#4267b2",
                type: "rounded"
            },
            backgroundOptions: {
                color: "#e9ebee"
            }
        });
        global.document.body.innerHTML = "<div id='container'></div>";
        var container = global.document.getElementById("container");
        qrCode.append(container);
        //TODO remove setTimout
        setTimeout(function () {
            expect(qrCode._canvas.getCanvas().toDataURL()).toEqual(expect.stringContaining(expectedQRCodeFile));
            done();
        });
    });
    it("Compatible with node-canvas", function (done) {
        var expectedQRCodeFile = fs.readFileSync(path.resolve(__dirname, "../assets/test/image_from_readme.png"), "base64");
        var qrCode = new QRCodeStyling({
            nodeCanvas: nodeCanvas,
            width: 300,
            height: 300,
            data: "TEST",
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAEUlEQVR42mNk+M+AARiHsiAAcCIKAYwFoQ8AAAAASUVORK5CYII=",
            dotsOptions: {
                color: "#4267b2",
                type: "rounded"
            },
            backgroundOptions: {
                color: "#e9ebee"
            }
        });
        qrCode.getRawData("png").then(function (buffer) {
            var uri = "data:image/png;base64," + buffer.toString("base64");
            expect(uri).toEqual(expect.stringContaining(expectedQRCodeFile));
            done();
        });
    });
    it("Compatible with jsdom", function (done) {
        var expectedQRCodeFile = fs.readFileSync(path.resolve(__dirname, "../assets/test/image_from_readme.svg"), "base64");
        var qrCode = new QRCodeStyling({
            jsdom: JSDOM,
            type: "svg",
            width: 300,
            height: 300,
            data: "TEST",
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAEUlEQVR42mNk+M+AARiHsiAAcCIKAYwFoQ8AAAAASUVORK5CYII=",
            dotsOptions: {
                color: "#4267b2",
                type: "rounded"
            },
            backgroundOptions: {
                color: "#e9ebee"
            }
        });
        qrCode.getRawData("svg").then(function (buffer) {
            var svgString = buffer.toString("base64");
            expect(svgString).toEqual(expect.stringContaining(expectedQRCodeFile));
            done();
        });
    });
});
//# sourceMappingURL=QRCodeStyling.test.js.map