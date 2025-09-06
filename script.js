document
  .getElementById("myForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const clientName = document.getElementById("title").value;
    const dealValue = document.getElementById("value").value;
    const apiToken = "1aee7a110b2fc4a5fef4f9304b2eec83c0c12a4f";

    try {
      const response = await fetch(
        `https://api.pipedrive.com/api/v2/deals?api_token=${apiToken}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: clientName,
            value: dealValue,
          }),
        }
      );

      if (response.ok) {
        console.log(response);

        await sdk.execute(Command.SHOW_SNACKBAR, {
          message: "Action completed",
          link: {
            url: "https://pipedrive-sandbox2.pipedrive.com/deal/8",
            label: "View",
          },
        });

        document.getElementById("myForm").reset();
      } else {
        alert("Failure: " + response.status);
      }
    } catch (error) {
      alert("Failure: " + error.message);
    }
  });
