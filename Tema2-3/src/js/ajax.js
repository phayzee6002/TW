window.onload = getWords1;

//* FUNCTIONEAZA
function getWords1() {
    fetch('http://localhost:3000/words', {
        method: 'get'
    }).then((response) => {
        response.json().then((data) => {
            var body = document.getElementById("body")
            var div = document.createElement("div")

            for(let i =0;i<data.length;i++) {
                var p1 = document.createElement("p");
                var p2 = document.createElement("p");

                p1.style.color="yellow";
                p2.style.color="blue";
                p1.appendChild(document.createTextNode(data[i].word))
                p2.appendChild(document.createTextNode(data[i].id))
                div.appendChild(p1);
                div.appendChild(p2);
                div.style.display="inline-block";
            }
            body.appendChild(div);
        })
    })
}

//* FUNCTIONEAZA
function addWord() {
    var word = document.getElementById("input1").value;
    var newWord = {
        word: word
    }
    fetch('http://localhost:3000/words', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newWord)
    }).then(function(response) {
        console.log(response);
    })
    document.getElementById("input1").value='';
}

// TODO INTREBARE
//! NU FUNCTIONEAZA DELOC
// function deleteWord(id) {
//     fetch('http://localhost:3000/words/' + id, {
//         method: 'delete',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }).then(function(response) {
//         window.location.reload();
//     })
// }

/*
*/

// TODO INTREBARE
//! FUNCTIONEAZA NECORESPUNZATOR
function deleteWord() {
    var id = document.getElementById("input2").value;
    $.ajax({
        url: 'http://localhost:3000/words/' + id,
        type: 'DELETE',
        success: function(data) {
            console.log(data);
        }
    })
    document.getElementById("input2").value='';
}

// TODO INTREBARE
//! FUNCTIA ACEASTA NU MERGE deleteWord()
// function deleteWord(id) {
//     fetch('http://localhost:3000/words/' + id, {
//         method: 'delete',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }).then(function(response) {
//         window.location.reload();
//     })
// }

/*
*/

//* FUNCTIONEAZA
function updateWord() {
    var id = document.getElementById("input3").value;
    var data = document.getElementById("input1").value;
    var newWord = {
        word: data
    }
    console.log(newWord, id)

    fetch('http://localhost:3000/words/' + id, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newWord)
    }).then(function(response) {
        window.location.reload();
    })
    document.getElementById("input1").value='';
    document.getElementById("input3").value='';
}
