function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

$(document).ready(function () {
    $("#enq-form").on("submit", function (e) {
        e.preventDefault();

        const form = $(this);
        const submitBtn = form.find(".idx-btn");
        const originalBtnText = submitBtn.text();

        // Basic Validation
        let isValid = true;
        form.find("input[required], textarea[required]").each(function () {
            if ($(this).val().trim() === "") {
                $(this).addClass("error");
                isValid = false;
            } else {
                $(this).removeClass("error");
            }
        });

        if (!isValid) {
            alert("Please fill in all required fields.");
            return;
        }

        // Prepare Data
        const formData = new FormData(this);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        // UI Feedback
        submitBtn.prop("disabled", true).text("Sending...");

        fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: json,
        })
            .then(async (response) => {
                let json = await response.json();
                if (response.status == 200) {
                    alert("Message sent successfully!");
                    form[0].reset();
                } else {
                    console.log(response);
                    alert(json.message || "Something went wrong!");
                }
            })
            .catch((error) => {
                console.log(error);
                alert("Something went wrong!");
            })
            .then(function () {
                submitBtn.prop("disabled", false).text(originalBtnText);
            });
    });
});
