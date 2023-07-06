import Person from './modules/Player.js';
import {
    rand,
    names,
    roles,
    history
} from "./presets.js";

let enemy;
let player;
let bot_move_def = false;

function chat_update(subject, action) {
    let p = document.createElement('p'),
        chat_box = document.querySelector('.chat-box');

    p.innerHTML = subject + ': ' + action;
    chat_box.appendChild(p);
    chat_box.scrollTop = chat_box.scrollHeight;
}

function bot_create() {
    enemy = new Person(names[rand(0, names.length - 1)], roles[rand(0, roles.length - 1)]);
}

function bot_move(player_move_def) {
    let bot_move = rand(1, 10);

    switch (bot_move) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            var damage = enemy.person_damage();
            var initial_damage = damage;

            if (player_move_def === true) {

                damage = Math.trunc(damage * (player.strength / 10));
                player_move_def = false;
            }

            player.taken_damage(damage);

            update_stats(player, document.querySelector('.enemy'));

            chat_update('', 'Enemy hit ' + damage + ' out of ' + initial_damage + ' damage');

            break;
        case 7:
        case 8:
            bot_move_def = true;

            chat_update('', 'Enemy block your next move');
            break;
        case 9 && enemy.health <= 10:
            chat_update(enemy.name, 'run from me');

            bot_create();
            break;
        case 10 && enemy.health <= 10:
            chat_update(enemy.name, 'hide from me');

            bot_create();
            break;

        default:
            break;
    }
}

function move(player_move, real_player_name) {
    let player_move_def = false;

    switch (player_move) {
        case 'attack':
            var damage = player.person_damage();
            var initial_damage = damage;

            if (bot_move_def === true) {


                damage = Math.trunc(damage * (enemy.strength / 10));
                bot_move_def = false;
            }

            enemy.taken_damage(damage);

            chat_update(real_player_name, 'Try to hit him');
            update_stats(enemy, document.querySelector('.enemy'));

            setTimeout(() => {
                chat_update(player.name, 'I hit ' + damage + ' out of ' + initial_damage + ' damage');
            }, 500);
            break;

        case 'defence':
            player_move_def = true;

            chat_update(real_player_name, 'Try to block');

            setTimeout(() => {
                //     chat_update(player.name, 'I got ' + damage + ' damage');
                chat_update(player.name, 'Ok, i try');
            }, 500);
            break;

        case 'run':
            chat_update(real_player_name, 'Try to run');

            setTimeout(() => {
                chat_update(player.name, 'I run from the enemy');
            }, 500);

            if (rand(0, 5) === 0) {
                player.taken_damage(enemy.person_damage());

                update_stats(player, document.querySelector('.person'));

                setTimeout(() => {
                    chat_update(player.name, 'Oh shit he attacked me');
                }, 500);
            }

            bot_create();
            break;

        case 'hide':
            chat_update(real_player_name, 'Try to hide');

            setTimeout(() => {
                chat_update(player.name, 'I hope he coud`t find me');
            }, 500);

            bot_create();
            break;

        default:
            break;
    }

    update_stats(enemy, document.querySelector('.enemy'));

    setTimeout(() => {

        if (enemy.health <= 0) {
            bot_create();
        } else {
            bot_move(player_move_def);
        }

        update_stats(player, document.querySelector('.person'));
        update_stats(enemy, document.querySelector('.enemy'));
    }, 750);


    if (player.health <= 0) {
        if (!alert('pretend you`re dead')) {
            window.location.reload();
        }
    }
}

function update_stats(subject, container) {
    container.innerHTML = '<p>Name: ' + subject.name +
        '</p><p>Role: ' + subject.role +
        '</p><p>health: ' + subject.health +
        '</p><p>strength: ' + subject.strength +
        '</p><p>intelligence: ' + subject.intelligence +
        '</p><p>gun: ' + subject.gun[0] + ' ' + subject.gun[1][0] + '-' + subject.gun[1][1] +
        '</p><p>history: ' + subject.history + '</p>';
}

window.onload = () => {
    let real_player_name = 'You';
    player = new Person(names[rand(0, names.length - 1)], roles[rand(0, roles.length - 1)]);

    bot_create();


    update_stats(player, document.querySelector('.person'));
    update_stats(enemy, document.querySelector('.enemy'));

    document.querySelector('#attack-btn').onclick = () => {
        move('attack', real_player_name);
    };

    document.querySelector('#defence-btn').onclick = () => {
        move('defence', real_player_name);
    };

    document.querySelector('#run-btn').onclick = () => {
        move('run', real_player_name);
    };

    document.querySelector('#hide-btn').onclick = () => {
        move('hide', real_player_name);
    };
}