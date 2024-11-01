// შექმენით html და js ფაილები , html ში უნდა იყოს h1 თეგში ინფორმაციის დამატება ,
// ასევე უნდა იყოს ერთი ღილაკი სადაც დაჭერის შემთხვევაში ამოაგდებს prompt_ს რომელშიც
// შეიყვანთ ინფორმაციას , თუ არ შეიყვან უნდა ამომიგდოს ალერტი , ინფორმაციის შეყვანის შემდეგ 
// უნდა გამომიტანოს ul ლისთში li აითემებად ჩემი დამატებული ინფორმაცია , თითოეულ li აითემს 
// უნდა ქონდეს საკუთარი წაშლის ღილაკი და დაჭერის შემთვევაში უნდა იშლებოდეს ის ინფორმაცია რომელსაც დავაჭერ.


let AddButton = document.getElementById('addButton')

AddButton.addEventListener("click" , function(){
    const info = prompt("შეიყვანეთ ინფორმაცია:");

    if(info){
        addItem(info)
    }else{
        alert("ინფორმაციის შეყვანის გარეშე სიაში არ დამატდება არაფერი!")
    }
});

function addItem(info) {
    const ul = document.getElementById('infoList');
    const li = document.createElement('li');
    li.textContent = info;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'წაშლა';
    deleteButton.addEventListener('click', function() {
        ul.removeChild(li);
    });

    li.appendChild(deleteButton);
    ul.appendChild(li);
}

