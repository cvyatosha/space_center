class Map {
    map = [];

    constructor() {
        this.generate(10);
    };

    rand(number1, number2){  // функція рандома 
        return Math.floor(Math.random() * (number2 - number1 + 1) + number1);
    }

    generate(size) {
        for (let i = 0; i < size; i++) {
            this.map[i] = [];
            
            for (let j = 0; j < size; j++) {
                this.map[i][j] = 0;  
            }
        }

        let start_coord = this.rand(0,4);
        let room_numbers;

        if (size * 3 <= Math.pow(size, 2)) {
            room_numbers = size * 3;
        } else {
            room_numbers = size;
        }

        let x = start_coord;
        let y = 0;

        let way,
            find_way = false;

        for (let i = 0; i < room_numbers;) {
            find_way = false;

            if (this.map[x][y] != 1) {
                this.map[x][y] = 1; 
                i++;
            }
            
            while (!find_way) {
                
                way = this.rand(1,4);
    
                if (way == 1 && x-1 > 0) {
                    x--;
                    find_way = true;
                }

                if (way == 2 && y+1 < size) {
                    y++;
                    find_way = true;
                }

                if (way == 3 && x+1 < size) {
                    x++;
                    find_way = true;
                }

                if (way == 4 && y-1 > 0) {
                    y--;
                    find_way = true;
                }
            }
        }

        console.log(this.map);
    }
}