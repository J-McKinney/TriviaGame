$("document").ready(function () {
    //History Question, 1stgrade-5thgrade////////////////////////////////////////////////////////////////
    var firstQ = ["The first Thanksgiving was celebrated by Native Americans and what other group of people?",
        "From which country did Mexico gain its independence in the 19th century?",
        "Who invented the light bulb in 1879?",
        "Which language is the mostly widely spoken in South America?",
        "Neil Armstrong and Buzz Aldrin were the first two men in the entire world to do what?"
    ];
    var secondQ = ["What are the three branches of the United States government?",
        "Which war was fought between the north and south regions in the United States?",
        "Italy, Japan, and Germany’s alliance was called what during WWII?",
        "What city was the first to be attacked by an atomic bomb?",
        "What are the first ten amendments to the Constitution called?"
    ];
    var thirdQ = ["What type of feather, beginning with letter Q, did people write with during the Middle Ages?",
        "Julius Caesar was the emperor of what empire?",
        "What is Rosa Parks most famous for?",
        "The first fireworks were invented in the 7th century in what country?",
        "Name the American president on the half dollar coin who was assassinated in 1963."
    ];
    var fourthQ = ["What ancient civilization built the Machu Picchu complex in Peru?",
        "The ancient Egyptian writing system was called what?",
        "From whom did the United State buy territory in the Louisiana Purchase?",
        "Who wrote the national anthem of the United States of America?",
        "The Battle of Gettysburg was fought in which war?"
    ];
    var fifthQ = ["The what was the name of the last Queen of France?",
        "The region known as the “Fertile Crescent” is located in present day…",
        "The modern day city of Istanbul was known by what name in the 13th century…",
        "The French and Indian war, which began in 1754, became the North American theater of this worldwide war that lasted from 1756 to 1763…",
        "In which decade did Hong Kong revert from British rule…"
    ];
//History questions randomly picked, 1stgrade-5thgrade//////////////////////////////////////////////////////
    var qOne = firstQ[Math.floor(Math.random() * firstQ.length)];
    console.log(qOne);
    $("#h100").on("click", function () {
        $(".lead").html(qOne);
    })

    var qTwo = secondQ[Math.floor(Math.random() * secondQ.length)];
    console.log(qTwo);
    $("#h200").on("click", function () {
        $(".lead").html(qTwo);
    })

    var qThree = thirdQ[Math.floor(Math.random() * thirdQ.length)];
    console.log(qThree);
    $("#h300").on("click", function () {
        $(".lead").html(qThree);
    })

    var qFour = fourthQ[Math.floor(Math.random() * fourthQ.length)];
    console.log(qFour);
    $("#h400").on("click", function () {
        $(".lead").html(qFour);
    })

    var qFive = fifthQ[Math.floor(Math.random() * fifthQ.length)];
    console.log(qFive);
    $("#h500").on("click", function () {
        $(".lead").html(qFive);
    })
    //History////////////////////////////////////////////////////////////////////////////////////////////////////










})