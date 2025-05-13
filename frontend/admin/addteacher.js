let btn = document.getElementById("btn1");

btn.addEventListener("click", async (event) => {
    event.preventDefault();

    const formData = {
        teacherName: document.getElementById("teacherName").value,
        email: document.getElementById("email").value,
        qualifications: document.getElementById("qualifications").value,
        experience: document.getElementById("experience").value,
        phoneNo: document.getElementById("phoneNo").value,
        city: document.getElementById("city").value,
        subject: document.getElementById("subject").value,
        image: document.getElementById("image").value,
        about: document.getElementById("about").value,
        slots: []
    };

    try {
        const response = await fetch("https://tutor-appointment-booking-system.onrender.com/teacher/addteacher", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: localStorage.getItem("token")
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();
        
        if (response.ok) {
            Swal.fire("Teacher Added Successfully");
            // Clear form
            document.querySelector(".add-form").reset();
        } else {
            throw new Error(data.msg || "Failed to add teacher");
        }
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: error.message
        });
    }
});