const contactType = document.getElementById("contactType");
const dynamicFields = document.getElementById("dynamicFields");

contactType.addEventListener("change", function () {
    const type = this.value;

    // limpa os campos anteriores
    dynamicFields.innerHTML = "";

    if (type === "company") {
        dynamicFields.innerHTML = `
            <input type="text" name="company_name" placeholder="Company Name" required>
            <input type="text" name="company_size" placeholder="Company Size (optional)">
        `;
    }

    if (type === "recruiter") {
        dynamicFields.innerHTML = `
            <input type="text" name="company_name" placeholder="Company Name" required>
            <input type="text" name="position" placeholder="Your Position" required>
        `;
    }

    if (type === "client") {
        dynamicFields.innerHTML = `
            <input type="text" name="project_type" placeholder="Project Type">
            <input type="text" name="budget" placeholder="Estimated Budget">
        `;
    }

    if (type === "other") {
        dynamicFields.innerHTML = `
            <input type="text" name="details" placeholder="Additional Details">
        `;
    }
});