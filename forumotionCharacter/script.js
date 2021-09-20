let done = document.getElementById('done');
        
        function submit(){
            let characterquote = document.getElementById('characterQuote').value;

            let characterAvatar = document.getElementById('characterName').value;
            let characterName = document.getElementById('characterName').value;
            let characterAge = document.getElementById('characterAge').value;
            let characterGender = document.getElementById('characterGender').value;
            let characterClass = document.getElementById('characterClass').value;
            let characterRank = document.getElementById('characterRank').value;
            let characterGroup = document.getElementById('characterGroup').value;
            let characterProfession = document.getElementById('characterProfession').value;
            let description = document.getElementById('description').value;
            let anotherFormText = document.getElementById('anotherFormText').value;
            let anotherFormAvatar = document.getElementById('anotherFormAvatar').value;
            let personality = document.getElementById('personality').value;
            let lifeWay = document.getElementById('lifeWay').value;
            let ability = document.getElementById('ability').value;
            let skills = document.getElementById('skills').value;
            let other = document.getElementById('other').value;
            
            done.innerHTML = '<h1>Karakter Adatai</h1>'+characterName+'<br>'+characterAge+'<br>'+characterGender+'<br>'+characterClass+'<br>'+ characterRank+'<br>'+characterGroup+'<br>'+characterProfession+'<br>'+description+'<br>'+anotherFormAvatar+'<br>'+personality+'<br>'+lifeWay+'<br>'+ability+'<br>'+skills+'<br>'+other+'<br>';
        }