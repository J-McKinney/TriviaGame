$("document").ready(function () {
    var score = 0;
    var userScore = 0;
    //geography questions, 1stgrade-5thgrade/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var firstG = [
        ["How many continents are there?", "7", "6", "9", "11"],
        ["What country is Paris the capital of?", "France", "Champagne", "Lyon", "Cannes"],
        ["In which country are the famous Pyramids of Giza?", "Egypt", "Cairo", "Budapest", "Cairo"],
        ["In what city is the White House located?", "Washington D.C.", "Boston", "Albany", "Tulsa"],
        ["How many states are in the United States of America?", "50", "51", "48", "52"]
    ];
    var secondG = [
        ["Which state is called the Lone Star state?", "Texas", "North Carolina", "Washington", "Arkansas"],
        ["In what state is the Grand Canyon located?", "Arizona", "New Mexico", "Nevada", "Utah"],
        ["What three countries are located in North America?", "Canada, the United States, and Mexico", "Alaska, Hawaii, and Bahamas", "New England, Baja, and Gulf", "Russia, China, and Egypt"],
        ["To travel from New York to London, one must fly over which ocean?", "The Atlantic Ocean", "The Pacific Ocean", "The Indian Ocean", "The Artic Ocean"],
        ["In what country is the famous Taj Mahal located?", "India", "Nepal", "China", "Mongolia"]
    ];
    var thirdG = [
        ["What is the longest river in the world?", "The Amazon", "The Nile", "The Ohio", "Niagra"],
        ["On what continent is the country of Greece located?", "Europe", "Africa", "Asia", "South America"],
        ["What is the name for a body of land that is completely surrounded by water?", "An island", "A peninsula", "A continent", "A plateau"],
        ["What is the capital of New York?", "Albany", "Newark", "Manhattan", "Calgary"],
        ["What is New York's nickname?", "The Empire State", "The Granite State", "The Apple State", "The Steel State"]
    ];
    var fourthG = [
        ["Where is the largest desert in the world located?", "Northern Africa"],
        ["How many kingdoms are part of the United Kingdom? 4:", "England Northern Ireland Scotland and Wales"],
        ["Which country is the largest in size?", "Russia"],
        ["The United States and Mexico are separated by which river?", "The Rio Grande"],
        ["What is the southernmost continent called?", "Antarctica"]
    ];
    var fifthG = [
        ["What is the main language spoken in the Canadian province of Quebec? French"],
        ["Which country is both an island and a continent? Australia"],
        ["What is the name of the sea bordered by Europe to the north and North Africa to the south? The Mediterranean Sea"],
        ["The mountain range that includes Mount Everest is called... The Himalayas"],
        ["Imaginary lines traversing the globe from pole to pole are called… Meridians"]
    ];
    //Eng & Lit Questions, 1stgrade-5thgrade/////////////////////////////////////////////////////////////////////////////////////////////////////////        
    var firstE = [
        ["The plural of “moose” is…", "Meese", "A Mock", "Moose", "Mooses"],
        ["How many letters are in the English alphabet?", "24", "22", "26", "28"],
        ["In the story about the boy who cried wolf, what is the lesson?", "It's better to love than loss", "What goes around, comes around", "Always tell the truth", "Don't pet the sweaty things and don't sweat the pety things"],
        ["What is the term for a word that is similar in meaning to another word?", "Antonym", "Palindrome", "Synonym", "Homonym"],
        ["What type of words should be capitalized?", "Adjectives", "Proverbs", "Proper nouns", "Variables"]
    ];
    var secondE = [
        ["What type of literature features magical creatures, such as giants, gnomes, and goblins?", "Folk Lores", "Myths", "Legends", "Fairy Tales"],
        ["Is “red” an adjective or a noun?", "Both", "Adjective", "Noun", "Neither"],
        ["What is the term for a word that has the opposite meaning of another word?", "Synonym", "Palindrome", "Pangram", "Antonym"],
        ["What are the five interrogative or 'question' words?", "Because, else, if, so, like", "Am, your, his, hers, those", "Look, hear, smell, taste, feel", "What, why, who, where, when"],
        ["What are the comparative and superlative forms of the word 'big'?", "Large and huge", "Small and tiny", "More and too", "Bigger and biggest"]
    ];
    var thirdE = [
        ["The person in a novel who tells the story from a third-person perspective is called a what?", "A third wall", "A narrator", "The antagonist", "The protagonist"],
        ["What is the name of the book about a friendship between a pig named Wilbur and spider named Charlotte?", "Babe", "Charlotte’s Web", "The sandlot", "Free Willy"],
        ["Adding conjunctions such as “and” or “but” turns a simple sentence into what type of sentence?", "Inline sentence", "Compound sentence", "A panogram", "None of them"],
        ["Who is the author of James and the Giant Peach?", "Eric Carle", "Roald Dahl", "Judy Blume", "E. B. White"],
        ["The main series of events in a story is called a what?", "An End", "A plot", "Conflict", "Structure"]
    ];
    var fourthE = [
        ["What is the main character in a story called?", "A protagonist", " An antagonist", "A narrator", "A comic-relief"],
        ["What type of word is 'truthfully?'", "Adverb", "Noun", "Proverb", "Adjective"],
        ["In this book titled The Lion, the Witch, and the Wardrobe, what is the last comma called?", "The Oxford comma", "The Brown note", "The Stanford character", "TOC"],
        ["A story conveying a moral lesson is called what?", "A fable", "A myth", "A legend", "a note"],
        ["What do you call a group of crows?", "A murder", "A flock", "A herd", "A trove"]
    ]; var fifthE = [
        ["Who is the creator of the classic book characters Tom Sawyer and Huckleberry Finn?", "Clara Clemens", "Mark Twain", "John Marshall", "Charles Dickens"],
        ["The words “the,” “an,” and “a,” are known as what in English grammar?", "Fillers", "Articles", "Arbitraries", "Pointers"],
        ["Who is the author of the 1960 novel about social and racial inequality To Kill a Mockingbird?", "Lee Harper", "Harper Lee", "Marcus Anthony", "John J. Reynolds"],
        ["Often seen at the end of a sentence, the three trailing dots that indicate the omission from speech or writing of a word or words that are superfluous or able to be understood from contextual clues are known as…", "Contrasts", "Ellipsis", "Pointers", "Wheels"],
        ["What is the name of the most famous English playwright?", "Homer", "William Shakespeare", "Charles Dickens", "Jane Austen"]
    ];
    //History Question, 1stgrade-5thgrade///////////////////////////////////////////////////////////////////////////////////////////////////////// 
    var firstH = [
        ["The first Thanksgiving was celebrated by Native Americans and what other group of people?", "The Pilgrims", "The Cherokee", "The Puritans", "The Spaniards"],
        ["From which country did Mexico gain its independence in the 19th century?", "Spain", "England", "Portugal", "Honduras"],
        ["Who invented the light bulb in 1879?", "Thomas Edison", "Alexander Graham Bell", "George Westinghouse", "J. P. Morgan"],
        ["Which language is the most widely spoken in South America?", "Spanish", "English", "Portuguese", "French"],
        ["Neil Armstrong and Buzz Aldrin were the first two men in the entire world to do what?", "Walk on the moon", "Play golf on the moon", "Land on the darkside of the moon", "Drive on the moon"]
    ];
    var secondH = [
        ["What are the three branches of the United States government?", "Congress, Supreme Court, Senate", "House of Rep., Congress, Legislative", "Legislative, Judicial, Executive", "Executive, Legislative, Congress"],
        ["Which war was fought between the north and south regions in the United States?", "The Revolutionary War", "The French and Indian War", "The Civil War", "The Mexican-American War"],
        ["Italy, Japan, and Germany’s alliance was called what during WWII?", "The Wolf's Lair", "The Third Reich", "The Axis of Evil", "Alliance of Reich"],
        ["What city was the first to be attacked by an atomic bomb?", "Nagasaki", "Kyoto", "Hiroshima", "Osaka"],
        ["What are the first ten amendments to the Constitution called?", "Civil Rights", "The Declaration", "The Bill of Rights", "Jackson's Treaties"]
    ];
    var thirdH = [
        ["What type of feather, beginning with letter Q, did people write with during the Middle Ages?", "Qwill", "Quill", "Quince", "Quint"],
        ["Julius Caesar was the emperor of what empire?", "The Greco-Roman Empire", "The Roman Empire", "The Anglo-Roman Empire", "The Romanian Empire"],
        ["What is Rosa Parks most famous for?", "Her Protests for Equal Rights", "Refusing to give her seat up in the front of the bus.", "First African American to vote", "First African American in a Desegregated College",],
        ["The first fireworks were invented in the 7th century in what country?", "Japan", "China", "India", "Mongolia"],
        ["Name the American president on the half dollar coin who was assassinated in 1963.", "Lyndon B. Johnson", "John F. Kennedy", "Dwight D. Eisenhower", "Harry S. Truman"]
    ];
    var fourthH = [
        ["What ancient civilization built the Machu Picchu complex in Peru?", "The Incas", "The Mayans", "The Aztecs", "The Andeans"],
        ["The ancient Egyptian writing system was called what?", "Hieroglyphics", "Cyrillic Script", "sanskrit", "Cuneiform"],
        ["From whom did the United State buy territory in the Louisiana Purchase?", "Napoleon/France", "Edouard de Stoeckl/Russia", "Luis de onis y Gonzalez-Vera/Spain", "Antonio López de Santa Anna/Mexico"],
        ["Who wrote the national anthem of the United States of America?", "Francis S. Key", "Nathaniel C. Towle", "Richard E. Berg", "Howard P. Willens"]
        ["The Battle of Gettysburg was fought in which war?", "The Civil War", "The Revolutionary War", "The War on Drugs", "World War 2"]
    ];
    var fifthH = [
        ["The what was the name of the last Queen of France?", "Anne of Brittany", "Adela of Champagne", "Empress Jose`phine", "Queen Marie Antoinette"],
        ["The region known as the “Fertile Crescent” is located in present day…", "Southeast Asia", "Western Europe", "Western Asia", "Middle East"],
        ["The modern day city of Istanbul was known by what name in the 13th century…", "Ephesus", "Ankara", "Izmir", "Constantinople"],
        ["The French and Indian war, which began in 1754, became the North American theater of this worldwide war that lasted from 1756 to 1763…", "American Revolutionary War", "The Battle of Britannia", "The Civil War", "The Seven Years War"],
        ["In which decade did Hong Kong revert from British rule…", "1960s (1968)", "1970s (1979)", "1980s (1986)", "1990s (1997)"]
    ];
    //geography questions randomly picked, 1stgrade-5thgrade/////////////////////////////////////////////////
    //                                                                   4th answer right
    var oneG = firstG[Math.floor(Math.random() * firstG.length)];
    console.log(oneG);
    $("#g100").on("click", function () {
        $("#g100").prop("disabled", true);
        enableAnswers();
        $(".lead").html(oneG[0]);
        $("#ans1").html(oneG[1]).one("click", function () {
            disableAnswers();
        });
        $("#ans2").html(oneG[2]).one("click", function () {
            disableAnswers();
        });
        $("#ans3").html(oneG[3]).one("click", function () {
            
            disableAnswers();
        });
        $("#ans4").html(oneG[4]).one("click", function () {
            userScore += 100;
            $("#score").html(userScore);
            alert("Correct Answer, Please Pick Another Category");
            disableAnswers();
        });
    })
//English & Lit questions randomly picked, 1stgrade-5thgrade///////////////////////////////////////////////////
//                                                                    3rd answer right
var oneE = firstE[Math.floor(Math.random() * firstE.length)];
    console.log(oneE);
    $("#e100").on("click", function () {
        $("#e100").prop("disabled", true);
        enableAnswers();
        $(".lead").html(oneE[0]);
        $("#ans1").html(oneE[1]).one("click", function () {
            disableAnswers();
        });
        $("#ans2").html(oneE[2]).one("click", function () {
            disableAnswers();
        });
        $("#ans3").html(oneE[3]).one("click", function () {
            userScore += 100;
            $("#score").html(userScore);
            alert("Correct Answer, Please Pick Another Category");
            disableAnswers();
        });
        $("#ans4").html(oneE[4]).one("click", function () {
            disableAnswers();
        });
    })
    //                                                                    4th answer right
    var twoE = secondE[Math.floor(Math.random() * secondE.length)];
    console.log(twoE);
    $("#e200").on("click", function () {
        $("#e200").prop("disabled", true);
        enableAnswers();
        $(".lead").html(twoE[0]);
        $("#ans1").html(twoE[1]).one("click", function () {
            disableAnswers();
        });
        $("#ans2").html(twoE[2]).one("click", function () {
            disableAnswers();
        });
        $("#ans3").html(twoE[3]).one("click", function () {
            disableAnswers();
        });
        $("#ans4").html(twoE[4]).one("click", function () {
            userScore += 200;
            $("#score").html(userScore);
            alert("Correct Answer, Please Pick Another Category");
            disableAnswers();
        });
    })
    //                                                                      2nd answer right
    var threeE = thirdE[Math.floor(Math.random() * thirdE.length)];
    console.log(threeE);
    $("#e300").on("click", function () {
        $("#e300").prop("disabled", true);
        enableAnswers();
        $(".lead").html(threeE[0]);
        $("#ans1").html(threeE[1]).one("click", function () {
            disableAnswers();
        });
        $("#ans2").html(threeE[2]).one("click", function () {
            userScore += 300;
            $("#score").html(userScore);
            alert("Correct Answer, Please Pick Another Category");
            disableAnswers();
        });
        $("#ans3").html(threeE[3]).one("click", function () {
            disableAnswers();
        });
        $("#ans4").html(threeE[4]).one("click", function () {
            disableAnswers();
        });
    })
    //                                                                           1st answer right
    var fourE = fourthE[Math.floor(Math.random() * fourthE.length)];
    console.log(fourE);
    $("#e400").on("click", function () {
        $("#e400").prop("disabled", true);
        enableAnswers();
        $(".lead").html(fourE[0]);
        $("#ans1").html(fourE[1]).one("click", function () {
            userScore += 400;
            $("#score").html(userScore);
            alert("Correct Answer, Please Pick Another Category");
            disableAnswers();
        });
        $("#ans2").html(fourE[2]).one("click", function () {
            disableAnswers();
        });
        $("#ans3").html(fourE[3]).one("click", function () {
            disableAnswers();
        });
        $("#ans4").html(fourE[4]).one("click", function () {
            disableAnswers();
        });
    })
    //                                                                        2nd answer right
    var fiveE = fifthE[Math.floor(Math.random() * fifthE.length)];
    console.log(fiveE);
    $("#e500").on("click", function () {
        $("#e500").prop("disabled", true);
        enableAnswers();
        $(".lead").html(fiveE[0]);
        $("#ans1").html(fiveE[1]).one("click", function () {
            disableAnswers();
        });
        $("#ans2").html(fiveE[2]).one("click", function () {
            userScore += 500;
            $("#score").html(userScore);
            alert("Correct Answer, Please Pick Another Category");
            disableAnswers();
        });
        $("#ans3").html(fiveE[3]).one("click", function () {
            disableAnswers();
        });
        $("#ans4").html(fiveE[4]).one("click", function () {
            disableAnswers();
        });
    })

    //History questions randomly picked, 1stgrade-5thgrade//////////////////////////////////////////////////////
    //                                                                         1st answer right
    var oneH = firstH[Math.floor(Math.random() * firstH.length)];
    console.log(oneH);
    $("#h100").on("click", function () {
        $("#h100").prop("disabled", true);
        enableAnswers();
        $(".lead").html(oneH[0]);
        $("#ans1").html(oneH[1]).one("click", function () {
            userScore += 100;
            $("#score").html(userScore);
            disableAnswers();
            alert("Correct Answer, Please Pick Another Category");
        });
        $("#ans2").html(oneH[2]).one("click", function () {
            disableAnswers();
        });
        $("#ans3").html(oneH[3]).one("click", function () {
            disableAnswers();
        });
        $("#ans4").html(oneH[4]).one("click", function () {
            disableAnswers();
        });
    })
    //                                                                            3rd answer right
    var twoH = secondH[Math.floor(Math.random() * secondH.length)];
    console.log(twoH);
    $("#h200").on("click", function () {
        $("#h200").prop("disabled", true);
        enableAnswers();
        $(".lead").html(twoH[0]);
        $("#ans1").html(twoH[1]).one("click", function () {
            disableAnswers();
        });
        $("#ans2").html(twoH[2]).one("click", function () {
            disableAnswers();
        });
        $("#ans3").html(twoH[3]).one("click", function () {
            userScore += 200;
            $("#score").html(userScore);
            disableAnswers();
            alert("Correct Answer, Please Pick Another Category");
        });
        $("#ans4").html(twoH[4]).one("click", function () {
            disableAnswers();
        });
    })
    //                                                                           2nd answer right
    var threeH = thirdH[Math.floor(Math.random() * thirdH.length)];
    console.log(threeH);
    $("#h300").on("click", function () {
        $("#h300").prop("disabled", true);
        enableAnswers();
        $(".lead").html(threeH[0]);
        $("#ans1").html(threeH[1]).one("click", function () {
            disableAnswers();
        });
        $("#ans2").html(threeH[2]).one("click", function () {
            userScore += 300;
            $("#score").html(userScore);
            disableAnswers();
            alert("Correct Answer, Please Pick Another Category");
        });
        $("#ans3").html(threeH[3]).one("click", function () {
            disableAnswers();
        });
        $("#ans4").html(threeH[4]).one("click", function () {
            disableAnswers();
        });
    })
    //                                                                      1st answer right
    var fourH = fourthH[Math.floor(Math.random() * fourthH.length)];
    console.log(fourH);
    $("#h400").on("click", function () {
        $("#h400").prop("disabled", true);
        enableAnswers();
        $(".lead").html(fourH[0]);
        $("#ans1").html(fourH[1]).one("click", function () {
            userScore += 400;
            $("#score").html(userScore);
            disableAnswers();
            alert("Correct Answer, Please Pick Another Category");
        });
        $("#ans2").html(fourH[2]).one("click", function () {
            disableAnswers();
        });
        $("#ans3").html(fourH[3]).one("click", function () {
            disableAnswers();
        });
        $("#ans4").html(fourH[4]).one("click", function () {
            disableAnswers();
        });
    })
    //                                                                       4th answer right
    var fiveH = fifthH[Math.floor(Math.random() * fifthH.length)];
    console.log(fiveH);
    $("#h500").on("click", function () {
        $("#h500").prop("disabled", true);
        enableAnswers();
        $(".lead").html(fiveH[0]);
        $("#ans1").html(fiveH[1]).one("click", function () {
            disableAnswers();
        });
        $("#ans2").html(fiveH[2]).one("click", function () {
            disableAnswers();
        });
        $("#ans3").html(fiveH[3]).one("click", function () {
            disableAnswers();
        });
        $("#ans4").html(fiveH[4]).one("click", function () {
            userScore += 500;
            $("#score").html(userScore);
            disableAnswers();
            alert("Correct Answer, Please Pick Another Category");
        })
    })

    function disableAnswers() {
        $("#ans1").prop("disabled", true);
        $("#ans2").prop("disabled", true);
        $("#ans3").prop("disabled", true);
        $("#ans4").prop("disabled", true);
    }

    function enableAnswers() {
        $("#ans1").prop("disabled", false);
        $("#ans2").prop("disabled", false);
        $("#ans3").prop("disabled", false);
        $("#ans4").prop("disabled", false);
    }









    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // document.body.onkeyup = function (e) {
    //     if (e.keyCode == 32) {
    //         reset();
    //     }
    // }
    //<a  href="" target="_blank"></a>
    //links to a new html page for the questions
    // for the other window
    //id="close" onclick="window.close()">
})