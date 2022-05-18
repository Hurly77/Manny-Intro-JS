document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  const email = document.getElementById('email');
  const name = document.getElementById('name');
  const rating = document.getElementById('rating');
  const checkbox = document.getElementById('checkbox');
  const ratingContainer = document.getElementById('rating-container');

  function onCheck(e) {
    // isChecked - IS a Boolean
    console.log('helo');
    const isChecked = checkbox.checked;
    if (isChecked) {
      ratingContainer.hidden = false;
    }
    if (!isChecked) {
      ratingContainer.hidden = true;
    }
  }

  function layout(children) {
    return /* HTML */ ` <!DOCTYPE html>
      <html lang="en" data-theme="emerald">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Koulen&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://cdn.jsdelivr.net/npm/daisyui@2.15.0/dist/full.css"
            rel="stylesheet"
            type="text/css"
          />
          <script src="https://cdn.tailwindcss.com"></script>
          <title>Ghost of Tsushima</title>
        </head>

        <body>
          <nav class="navbar gap-4 fixed top-0 bg-base-100">
            <h1 class="text-4xl">
              <span class="text-accent">GamE</span>
              Reviews
            </h1>
          </nav>
          <main class="h-screen pt-[5.2rem] w-full p-6 bg-base-200">
            <section
              id="main-content"
              class="w-full h-[87vh] flex items-center justify-center"
            >
              ${children}
            </section>
          </main>

          <script src=" ./index.js"></script>
        </body>
      </html>`;
  }

  function onSubmit(e) {
    e.preventDefault();

    const formObject = {
      email: email.value,
      name: name.value,
      rating: +rating.value,
      checkbox: checkbox.checked,
    };

    console.log(formObject);

    document.write(
      layout(/* HTML */ `<h1 class="text-3xl">
        Thank You
        <span class="text-secondary"> ${formObject?.name} </span>
        !! We appreciate your the feedback
      </h1>`),
    );
  }

  form.addEventListener('submit', onSubmit);
  checkbox.addEventListener('change', onCheck);
});
