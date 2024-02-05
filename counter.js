const countElement = document.getElementById("count");

    let count = 0;

    
    function updateCount() {
        countElement.textContent = count;
    }

    document.getElementById("incrementBtn").addEventListener("click", function() {
        count++;
        updateCount();
    });

    document.getElementById("decrementBtn").addEventListener("click", function() {
        count--;
        updateCount();
    });
    
    