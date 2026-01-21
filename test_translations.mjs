import { translations } from './src/data/translations.js';

console.log("Checking translations structure...");

try {
    // Check English
    if (!translations.en.working_on_content) throw new Error("Missing en.working_on_content");
    if (!translations.en.working_on_content["lang-btn"]) throw new Error("Missing en.working_on_content.lang-btn");
    console.log("English working_on_content: OK");

    // Check Italian
    if (!translations.it.working_on_content) throw new Error("Missing it.working_on_content");
    if (!translations.it.working_on_content["lang-btn"]) throw new Error("Missing it.working_on_content.lang-btn");
    console.log("Italian working_on_content: OK");

    console.log("SUCCESS: Translations structure is valid.");
} catch (error) {
    console.error("ERROR:", error.message);
    process.exit(1);
}
