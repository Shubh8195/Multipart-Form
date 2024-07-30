export function createFormData(data) {
    const formData = new FormData();

    function appendFormData(formData, data, parentKey = "") {
        if (data && typeof data === "object" && !(data instanceof File)) {
            Object.keys(data).forEach((key) => {
                appendFormData(
                    formData,
                    data[key],
                    parentKey ? `${parentKey}[${key}]` : key
                );
            });
        } else {
            formData.append(parentKey, data);
        }
    }

    appendFormData(formData, data);
    // for (let [key, value] of formData.entries()) {
    //     console.log(key, value);
    // }
    return formData;
}