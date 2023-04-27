const path = require("path");
const { JSDOM, VirtualConsole } = require("jsdom");

const { waitBrowserLoadEvent } = require("../test-utils/waitBrowserEvent");
const { readTextFile } = require("../test-utils/readTextFile");

// createToast
let createToast = null;
let createToastModule = null;
try {
    createToastModule = require("./createToast");
    createToast = createToastModule.createToast;
} catch (error) {}

describe("DOM element coordinates and dimensions", () => {
    let htmlString;

    let dom;
    let document;

    let virtualConsole;
    let consoleLogListener;

    beforeEach(async () => {
        consoleLogListener = jest.fn();
        virtualConsole = new VirtualConsole();
        virtualConsole.on("log", consoleLogListener);

        const filePath = path.join(__dirname, "index.html");
        htmlString = await readTextFile(filePath);

        // Create fake DOM
        dom = new JSDOM(htmlString, {
            runScripts: "dangerously",
            resources: "usable",
            virtualConsole,
        });

        document = dom.window.document;
    });

    describe("createToast", () => {
        let element;
        let toast;

        beforeEach(() => {
            global.document = document;
            global.window = {
                document,
            };

            element = document.createElement("span");
            element.textContent = "I am toast text";

            toast = createToast(element);
        });

        it("should create createToast.js file", () => {
            expect(createToastModule).not.toBeNull();
        });

        it("should create a <div> element", () => {
            expect(toast.tagName).toBe("DIV");
        });

        it('should add "toast" class name to a <div> element', () => {
            expect(toast.classList.contains("toast")).toBe(true);
        });

        it("should add styles for position fixed", () => {
            expect(toast.style).toEqual(
                expect.objectContaining({
                    position: "fixed",
                    top: "20px",
                    right: "20px",
                })
            );
        });

        it("should insert element as an only child", () => {
            let elementInside = toast.firstElementChild;

            expect(elementInside).toEqual(element);
        });

        it("toast should not be inserted to the page", async () => {
            await waitBrowserLoadEvent(document);

            const createdElement = createToast(element);
            let toastOnThePagedocument = document.querySelector(".toast");

            const isNotOnThePage =
                !!createdElement && toastOnThePagedocument === null;

            expect(isNotOnThePage).toBe(true);
        });
    });
});
