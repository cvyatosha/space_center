export function rand(number1, number2){  // функція рандома
    Math.floor(Math.random() * (number2 - number1 + 1) + number1); // метод генерації рандомного числа  
    return Math.floor(Math.random() * (number2 - number1 + 1) + number1);
};

export let names = ['Jack', 'Mike', 'Oleg', 'Kevin', 'Alexander', 'Andrew', 'Samuel', 'Fred', 'Harry', 'Thomas', 'William', 'Charlie', 'Oscar', 'Ethan'];
export let  roles = ['guard', 'medic', 'worker', 'prisoner'];

export let history = new Map([
        ['guard', 'Ти охоронець, на цьому все, це вся інформація'],
        ['medic', 'Тебе обрали серед тисячі як найкращього медика, твоя задача підтримувати здорв`я робітників та провести декілька важливих дослідів з таємною речовиною, можливо вона покращить почуття, а можливо підніме на ноги мертвого. Лишніх робочих не буває'],
        ['worker', 'Так значить ти прибув з ishimura. Кажеш маєш не тільки навички інженера ммм це цікаво, нам такі люди потрібні'],
        ['prisoner', 
            'Ти очоли переворот проти діючою влади на супутнику Юпітера, черз що тебе везуть до в`язниці строгого режиму яка є орбітальну станцією, втекти буде тяжко',
            // [
            //     'ти очоли переворот проти діючою влади на супутнику Юпітера, черз що тебе везуть до в`язниці строгого режиму яка є орбітальну станцією, втекти буде тяжко',
            //     'Питання номер один як втекти з зорельоту. Питання номер два що за хріть тут твориться. І ще на майбютнє постарайся наступного разу краще переховуватись, а не сидіти в барі напроти поліцейського віділку'
            // ],
        ]
    ]);

   