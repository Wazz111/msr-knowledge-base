
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const path = require("node:path");

const html = fs.readFileSync(
    path.join(__dirname, "../src/index.html"), "utf8"
);

const script = fs.readFileSync(
    path.join(__dirname, "../src/script.js"), "utf8"
);

const sections = [
    "data-sources",
    "collection-methods",
    "analysis-methods",
    "publication-venues"
];

// Test 1: Check navigation and sections
test("All four navigation sections exist", () => {
    sections.forEach(id => {
        assert.ok(html.includes(`data-target="${id}"`));
        assert.ok(html.includes(`id="${id}"`));
    });
});

// Test 2: Check data sources
test("All seven data sources are displayed", () => {
    const sources = [
        "GitHub",
        "Stack Overflow",
        "JIRA",
        "App Stores",
        "Travis CI / Jenkins",
        "Mailing Lists",
        "npm Registry"
    ];

    sources.forEach(source => {
        assert.ok(html.includes(`<td>${source}</td>`));
    });
});

// Test 3: Check table structure
test("Data Sources table has correct columns", () => {
    assert.ok(html.includes("<th>Source</th>"));
    assert.ok(html.includes("<th>Data Provided</th>"));
    assert.ok(html.includes("<th>Description</th>"));
});

// Test 4: Check JavaScript tab switching
test("Clicking tabs changes the visible section", () => {
    const tabs = sections.map(id => {
        const classes = new Set(
            id === "data-sources" ? ["tab", "active"] : ["tab"]
        );

        return {
            classList: {
                add: value => classes.add(value),
                remove: value => classes.delete(value),
                contains: value => classes.has(value)
            },
            getAttribute: () => id,
            setAttribute: () => {},
            addEventListener(event, handler) {
                if (event === "click") this.click = handler;
            }
        };
    });

    const panels = sections.map((id, i) => ({
        id,
        hidden: i !== 0
    }));

    const document = {
        querySelectorAll(selector) {
            return selector === ".tab" ? tabs : panels;
        },
        getElementById(id) {
            return panels.find(panel => panel.id === id);
        }
    };

    vm.runInNewContext(script, { document });

    tabs[1].click();

    assert.equal(panels[0].hidden, true);
    assert.equal(panels[1].hidden, false);
    assert.equal(tabs[1].classList.contains("active"), true);

    tabs[0].click();

    assert.equal(panels[0].hidden, false);
    assert.equal(panels[1].hidden, true);
});
