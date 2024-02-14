    // Get reference to the No button
    const noButton = document.getElementById('noButton');
    let clickCount = 0;

    // Add event listener to the No button
    noButton.addEventListener('click', function() {
        clickCount++;

        // Gradually make the button smaller
        noButton.style.transform = `scale(${1 - clickCount * 0.1})`;

        // If clicked 3 times, hide the button and start showing Yes buttons
        if (clickCount >= 3) {
            noButton.style.display = 'none';
            startShowingYesButtons();
        }
    });

    // Function to start showing Yes buttons
    function startShowingYesButtons() {
        // Call the displayYesButton function every 200 milliseconds
        setInterval(displayYesButton, 500);
    }

    // Function to create and display the Yes button
    function displayYesButton() {
        const buttonContainer = document.querySelector('.button-container');
        const yesButton = document.createElement('button');
        yesButton.textContent = 'Yes';
        yesButton.classList.add('yes-button');
        yesButton.style.left = Math.random() * (window.innerWidth - 50) + 'px'; // Random horizontal position
        yesButton.style.top = Math.random() * (window.innerHeight - 50) + 'px'; // Random vertical position
        yesButton.style.backgroundColor = getRandomColor(); // Random background color
        buttonContainer.appendChild(yesButton);
        //createHeart(yesButton.offsetLeft, yesButton.offsetTop); // Create a heart shape around the button
        setTimeout(() => {
            buttonContainer.removeChild(yesButton); // Remove the button after a certain time
        }, 2000);
    }

    // Function to generate a random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }


// Get reference to the Yes button
const yesButton = document.getElementById('yesButton');
let continueShowingYes = true; // Flag variable to control the yes messages

// Function to show the message box with the GIF
function showMessageBoxWithGIF() {
    // Create the message box
    const messageBox = document.createElement('div');
    messageBox.classList.add('message-box');

    // Create the message
    const message = document.createElement('p');
    message.textContent = 'Do you want to know something?';

    // Create the GIF
    const gifImage = document.createElement('img');
    gifImage.src = '../images/shy-cat.gif'; // Replace with the path to your GIF
    gifImage.alt = 'GIF';

    // Create "Yep" button
    const yepButton = document.createElement('button');
    yepButton.textContent = 'Yep';
    yepButton.classList.add('message-button');

    // Add event listener to "Yep" button
    yepButton.addEventListener('click', function() {
        // Remove the message box from the body
        document.body.removeChild(messageBox);
        
        // Call function to display popping "ily.gif" only once
        if (continueShowingYes) {
            showPoppingIlyGif();
            continueShowingYes = false; // Set the flag to false to stop further popping yes messages
        }
    });

    // Create "No" button
    const noButton = document.createElement('button');
    noButton.textContent = 'No';
    noButton.classList.add('message-button');

    // Add event listener to "No" button
    noButton.addEventListener('click', function() {
        // Handle "No" button click event
        window.location.href = 'index.html'; // Redirect to index.html page
    });

    // Append the message, GIF, and buttons to the message box
    messageBox.appendChild(message);
    messageBox.appendChild(gifImage);
    messageBox.appendChild(yepButton);
    messageBox.appendChild(noButton);

    // Append the message box to the body
    document.body.appendChild(messageBox);

    // Show the message box
    messageBox.style.display = 'block';
}

// Function to display popping "ily.gif" with longer duration
function showPoppingIlyGif() {
    const loveImage = document.createElement('img');
    loveImage.src = '../images/ily.gif'; // Replace with the path to your love image
    loveImage.alt = 'I Love You';
    loveImage.classList.add('popping-ily'); // Add class for popping animation

    // Append the love image to the body
    document.body.appendChild(loveImage);

    // Adjust the display duration to 5 seconds (5000 milliseconds)
    setTimeout(() => {
        document.body.removeChild(loveImage);
    }, 5000); // Change the time as needed
}



// Add event listener to the Yes button
yesButton.addEventListener('click', function() {
    showMessageBoxWithGIF(); // Show the message box with the GIF when Yes button is clicked
});


// Function to apply romantic background
function applyRomanticBackground() {
    // Add the class to the body tag
    document.body.classList.add('romantic-background');
}

// Add event listener to the Yes button
yesButton.addEventListener('click', function() {
    applyRomanticBackground(); // Apply romantic background when Yes button is clicked
});



