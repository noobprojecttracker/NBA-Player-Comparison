const players = ['A.J. Green', 'A.J. Lawson', 'A.J. Lawson', 'A.J. Lawson', 'AJ Griffin', 'Aaron Gordon', 'Aaron Holiday', 'Aaron Nesmith', 'Aaron Wiggins', 'Admiral Schofield', 'Al Horford', 'Alec Burks', 'Aleksej Pokusevski', 'Alex Caruso', 'Alex Len', 'Alize Johnson', 'Alondes Williams', 'Alperen Sengun', 'Amir Coffey', 'Andre Drummond', 'Andre Iguodala', 'Andrew Nembhard', 'Andrew Wiggins', 'Anfernee Simons', 'Anthony Davis', 'Anthony Edwards', 'Anthony Gill', 'Anthony Lamb', 'Austin Reaves', 'Austin Rivers', 'Ayo Dosunmu', 'Bam Adebayo', 'Ben Simmons', 'Bennedict Mathurin', 'Bismack Biyombo', 'Blake Griffin', 'Blake Wesley', 'Boban Marjanovic', 'Bobby Portis', 'Bogdan Bogdanovic', 'Bojan Bogdanovic', 'Bol Bol', 'Bones Hyland', 'Bones Hyland', 'Bones Hyland', 'Bradley Beal', 'Brandon Boston Jr.', 'Brandon Clarke', 'Brandon Ingram', 'Braxton Key', 'Brook Lopez', 'Bruce Brown', 'Bruno Fernando', 'Bruno Fernando', 'Bruno Fernando', 'Bryce McGowens', 'Bryn Forbes', 'Buddy Boeheim', 'Buddy Hield', 'CJ McCollum', 'Cade Cunningham', 'Caleb Houstan', 'Caleb Martin', 'Cam Reddish', 'Cam Reddish', 'Cam Reddish', 'Cam Thomas', 'Cameron Johnson', 'Cameron Johnson', 'Cameron Johnson', 'Cameron Payne', 'Caris LeVert', 'Carlik Jones', 'Cedi Osman', 'Chance Comanche', 'Charles Bassey', 'Chima Moneke', 'Chimezie Metu', 'Chris Boucher', 'Chris Duarte', 'Chris Paul', 'Chris Silva', 'Christian Braun', 'Christian Koloko', 'Christian Wood', 'Chuma Okeke', 'Clint Capela', 'Coby White', 'Cody Martin', 'Cody Zeller', 'Cole Anthony', 'Cole Swider', 'Collin Sexton', 'Corey Kispert', 'Cory Joseph', "D'Angelo Russell", "D'Angelo Russell", "D'Angelo Russell", 'Daishen Nix', 'Dalano Banton', 'Dalen Terry', 'Damian Jones', 'Damian Jones', 'Damian Jones', 'Damian Lillard', 'Damion Lee', 'Daniel Gafford', 'Daniel Theis', 'Danny Green', 'Danny Green', 'Danny Green', 'Danuel House Jr.', 'Dario Saric', 'Dario Saric', 'Dario Saric', 'Darius Bazley', 'Darius Bazley', 'Darius Bazley', 'Darius Days', 'Darius Garland', 'David Duke Jr.', 'David Roddy', 'Davion Mitchell', 'Davis Bertans', 'Davon Reed', 'Davon Reed', 'Davon Reed', "Day'Ron Sharpe", "De'Aaron Fox", "De'Andre Hunter", "De'Anthony Melton", 'DeAndre Jordan', 'DeMar DeRozan', 'Dean Wade', 'Deandre Ayton', 'Dejounte Murray', 'Delon Wright', 'Deni Avdija', 'Dennis Schroder', 'Dennis Smith Jr.', 'Deonte Burton', 'Dereon Seabron', 'Derrick Jones Jr.', 'Derrick Rose', 'Derrick White', 'Desmond Bane', 'Devin Booker', 'Devin Vassell', 'Devon Dotson', "Devonte' Graham", "Devonte' Graham", "Devonte' Graham", 'Dewayne Dedmon', 'Dewayne Dedmon', 'Dewayne Dedmon', 'Dillon Brooks', 'Domantas Sabonis', 'Dominick Barlow', 'Donovan Mitchell', 'Donovan Williams', 'Donte DiVincenzo', 'Dorian Finney-Smith', 'Dorian Finney-Smith', 'Dorian Finney-Smith', 'Doug McDermott', 'Draymond Green', 'Drew Eubanks', 'Dru Smith', 'Dru Smith', 'Dru Smith', 'Duane Washington Jr.', 'Duncan Robinson', 'Dwight Powell', 'Dylan Windler', 'Dyson Daniels', 'Edmond Sumner', 'Eric Gordon', 'Eric Gordon', 'Eric Gordon', 'Eugene Omoruyi', 'Eugene Omoruyi', 'Eugene Omoruyi', 'Evan Fournier', 'Evan Mobley', 'Facundo Campazzo', 'Frank Jackson', 'Frank Kaminsky', 'Frank Kaminsky', 'Frank Kaminsky', 'Frank Ntilikina', 'Franz Wagner', 'Fred VanVleet', 'Furkan Korkmaz', 'Gabe Vincent', 'Gabe York', 'Garrett Temple', 'Garrison Mathews', 'Garrison Mathews', 'Garrison Mathews', 'Gary Harris', 'Gary Payton II', 'Gary Payton II', 'Gary Payton II', 'Gary Trent Jr.', 'George Hill', 'George Hill', 'George Hill', 'Georges Niang', 'Giannis Antetokounmpo', 'Goga Bitadze', 'Goga Bitadze', 'Goga Bitadze', 'Goran Dragic', 'Goran Dragic', 'Goran Dragic', 'Gordon Hayward', 'Gorgui Dieng', 'Grant Williams', 'Grayson Allen', 'Greg Brown III', 'Hamidou Diallo', 'Harrison Barnes', 'Haywood Highsmith', 'Herbert Jones', 'Immanuel Quickley', 'Isaac Okoro', 'Isaiah Hartenstein', 'Isaiah Jackson', 'Isaiah Joe', 'Isaiah Livers', 'Isaiah Mobley', 'Isaiah Roby', 'Isaiah Stewart', 'Isaiah Todd', 'Ish Smith', 'Ish Wainright', 'Ivica Zubac', 'JD Davison', 'JT Thor', 'Ja Morant', 'JaMychal Green', 'JaVale McGee', 'Jabari Smith Jr.', 'Jabari Walker', 'Jack White', 'Jacob Gilyard', 'Jaden Hardy', 'Jaden Ivey', 'Jaden McDaniels', 'Jaden Springer', 'Jae Crowder', "Jae'Sean Tate", 'Jake LaRavia', 'Jakob Poeltl', 'Jakob Poeltl', 'Jakob Poeltl', 'Jalen Brunson', 'Jalen Duren', 'Jalen Green', 'Jalen Johnson', 'Jalen McDaniels', 'Jalen McDaniels', 'Jalen McDaniels', 'Jalen Smith', 'Jalen Suggs', 'Jalen Williams', 'Jamal Cain', 'Jamal Murray', 'Jamaree Bouyea', 'Jamaree Bouyea', 'Jamaree Bouyea', 'James Bouknight', 'James Harden', 'James Johnson', 'James Wiseman', 'James Wiseman', 'James Wiseman', 'Jared Butler', 'Jared Rhoden', 'Jaren Jackson Jr.', 'Jarred Vanderbilt', 'Jarred Vanderbilt', 'Jarred Vanderbilt', 'Jarrell Brantley', 'Jarrett Allen', 'Jarrett Culver', 'Jason Preston', 'Javonte Green', 'Jaxson Hayes', 'Jay Huff', 'Jay Scrubb', 'Jaylen Brown', 'Jaylen Nowell', 'Jaylin Williams', 'Jayson Tatum', 'Jeenathan Williams', 'Jeff Dowtin', 'Jeff Green', 'Jerami Grant', 'Jeremiah Robinson-Earl', 'Jeremy Sochan', 'Jericho Sims', 'Jevon Carter', 'Jimmy Butler', 'Jock Landale', 'Joe Harris', 'Joe Ingles', 'Joe Wieskamp', 'Joel Embiid', 'John Butler', 'John Collins', 'John Konchar', 'John Wall', 'Johnny Davis', 'Johnny Juzang', 'Jonas Valanciunas', 'Jonathan Isaac', 'Jonathan Kuminga', 'Jordan Clarkson', 'Jordan Goodwin', 'Jordan Hall', 'Jordan McLaughlin', 'Jordan Nwora', 'Jordan Nwora', 'Jordan Nwora', 'Jordan Poole', 'Jordan Schakel', 'Jose Alvarado', 'Josh Christopher', 'Josh Giddey', 'Josh Green', 'Josh Hart', 'Josh Hart', 'Josh Hart', 'Josh Minott', 'Josh Okogie', 'Josh Richardson', 'Josh Richardson', 'Josh Richardson', 'Joshua Primo', 'Jrue Holiday', 'Juan Toscano-Anderson', 'Juan Toscano-Anderson', 'Juan Toscano-Anderson', 'Juancho Hernangomez', 'Julian Champagnie', 'Julian Champagnie', 'Julian Champagnie', 'Julius Randle', 'Justin Champagnie', 'Justin Champagnie', 'Justin Champagnie', 'Justin Holiday', 'Justin Holiday', 'Justin Holiday', 'Justin Jackson', 'Justin Minaya', 'Justise Winslow', 'Jusuf Nurkic', 'KZ Okpala', 'Kai Jones', 'Karl-Anthony Towns', 'Kawhi Leonard', 'Keegan Murray', 'Keita Bates-Diop', 'Keldon Johnson', 'Kelly Olynyk', 'Kelly Oubre Jr.', 'Kemba Walker', 'Kendall Brown', 'Kendrick Nunn', 'Kendrick Nunn', 'Kendrick Nunn', 'Kennedy Chandler', 'Kenneth Lofton Jr.', 'Kenrich Williams', 'Kentavious Caldwell-Pope', 'Kenyon Martin Jr.', 'Keon Ellis', 'Keon Johnson', 'Kessler Edwards', 'Kessler Edwards', 'Kessler Edwards', 'Kevin Durant', 'Kevin Durant', 'Kevin Durant', 'Kevin Huerter', 'Kevin Knox', 'Kevin Knox', 'Kevin Knox', 'Kevin Love', 'Kevin Love', 'Kevin Love', 'Kevin Porter Jr.', 'Kevon Harris', 'Kevon Looney', 'Khem Birch', 'Khris Middleton', 'Killian Hayes', 'Kira Lewis Jr.', 'Klay Thompson', 'Kobi Simmons', 'Kris Dunn', 'Kristaps Porzingis', 'Kyle Anderson', 'Kyle Kuzma', 'Kyle Lowry', 'Kyrie Irving', 'Kyrie Irving', 'Kyrie Irving', 'LaMelo Ball', 'Lamar Stevens', 'Landry Shamet', 'Larry Nance Jr.', 'Lauri Markkanen', 'LeBron James', 'Leandro Bolmaro', 'Lester Quinones', 'Lindell Wigginton', 'Lindy Waters III', 'Lonnie Walker IV', 'Louis King', 'Luguentz Dort', 'Luka Doncic', 'Luka Garza', 'Luka Samanic', 'Luke Kennard', 'Luke Kennard', 'Luke Kennard', 'Luke Kornet', 'Mac McClung', 'Malachi Flynn', 'Malaki Branham', 'Malcolm Brogdon', 'Malcolm Hill', 'Malik Beasley', 'Malik Beasley', 'Malik Beasley', 'Malik Monk', 'Mamadi Diakite', 'MarJon Beauchamp', 'Marcus Morris', 'Marcus Smart', 'Mark Williams', 'Markelle Fultz', 'Markieff Morris', 'Markieff Morris', 'Markieff Morris', 'Marko Simonovic', 'Marvin Bagley III', 'Mason Plumlee', 'Mason Plumlee', 'Mason Plumlee', 'Matisse Thybulle', 'Matisse Thybulle', 'Matisse Thybulle', 'Matt Ryan', 'Matt Ryan', 'Matt Ryan', 'Matthew Dellavedova', 'Max Christie', 'Max Strus', 'Maxi Kleber', 'McKinley Wright IV', 'Meyers Leonard', 'Mfiondu Kabengele', 'Micah Potter', 'Michael Carter-Williams', 'Michael Foster Jr.', 'Michael Porter Jr.', 'Mikal Bridges', 'Mikal Bridges', 'Mikal Bridges', 'Mike Conley', 'Mike Conley', 'Mike Conley', 'Mike Muscala', 'Mike Muscala', 'Mike Muscala', 'Miles McBride', 'Mitchell Robinson', 'Mo Bamba', 'Mo Bamba', 'Mo Bamba', 'Monte Morris', 'Montrezl Harrell', 'Moritz Wagner', 'Moses Brown', 'Moses Brown', 'Moses Brown', 'Moses Moody', 'Moussa Diabate', 'Myles Turner', 'Naji Marshall', 'Nassir Little', 'Nathan Knight', 'Naz Reid', 'Neemias Queta', 'Nerlens Noel', 'Nerlens Noel', 'Nerlens Noel', 'Nic Claxton', 'Nick Richards', 'Nickeil Alexander-Walker', 'Nickeil Alexander-Walker', 'Nickeil Alexander-Walker', 'Nicolas Batum', 'Nikola Jokic', 'Nikola Jovic', 'Nikola Vucevic', 'Noah Vonleh', 'Norman Powell', 'OG Anunoby', 'Obi Toppin', 'Ochai Agbaji', 'Olivier Sarr', 'Omer Yurtseven', 'Onyeka Okongwu', 'Orlando Robinson', 'Oshae Brissett', 'Otto Porter Jr.', 'Ousmane Dieng', 'P.J. Tucker', 'P.J. Washington', 'PJ Dozier', 'Paolo Banchero', 'Pascal Siakam', 'Pat Connaughton', 'Patrick Baldwin Jr.', 'Patrick Beverley', 'Patrick Beverley', 'Patrick Beverley', 'Patrick Williams', 'Patty Mills', 'Paul George', 'Paul Reed', 'Payton Pritchard', 'Peyton Watson', 'Precious Achiuwa', 'Quentin Grimes', 'Quenton Jackson', 'R.J. Hampton', 'R.J. Hampton', 'R.J. Hampton', 'RJ Barrett', 'RaiQuan Gray', 'Raul Neto', 'Reggie Bullock', 'Reggie Jackson', 'Reggie Jackson', 'Reggie Jackson', 'Richaun Holmes', 'Ricky Rubio', 'Robert Covington', 'Robert Williams', 'Robin Lopez', 'Rodney McGruder', 'Romeo Langford', 'Ron Harper Jr.', "Royce O'Neale", 'Rudy Gay', 'Rudy Gobert', 'Rui Hachimura', 'Rui Hachimura', 'Rui Hachimura', 'Russell Westbrook', 'Russell Westbrook', 'Russell Westbrook', 'Ryan Arcidiacono', 'Ryan Arcidiacono', 'Ryan Arcidiacono', 'Ryan Rollins', 'Saben Lee', 'Saben Lee', 'Saben Lee', 'Saddiq Bey', 'Saddiq Bey', 'Saddiq Bey', 'Sam Hauser', 'Sam Merrill', 'Sandro Mamukelashvili', 'Sandro Mamukelashvili', 'Sandro Mamukelashvili', 'Santi Aldama', 'Scottie Barnes', 'Scotty Pippen Jr.', 'Serge Ibaka', 'Seth Curry', 'Shaedon Sharpe', 'Shai Gilgeous-Alexander', 'Shake Milton', 'Shaquille Harrison', 'Simone Fontecchio', 'Skylar Mays', 'Spencer Dinwiddie', 'Spencer Dinwiddie', 'Spencer Dinwiddie', 'Stanley Johnson', 'Stanley Umude', 'Stephen Curry', 'Sterling Brown', 'Steven Adams', 'Svi Mykhailiuk', 'Svi Mykhailiuk', 'Svi Mykhailiuk', 'T.J. McConnell', 'T.J. Warren', 'T.J. Warren', 'T.J. Warren', 'Taj Gibson', 'Talen Horton-Tucker', 'Tari Eason', 'Taurean Prince', 'Terance Mann', 'Terence Davis', 'Terrence Ross', 'Terrence Ross', 'Terrence Ross', 'Terry Rozier', 'Terry Taylor', 'Terry Taylor', 'Terry Taylor', 'Thaddeus Young', 'Thanasis Antetokounmpo', 'Theo Maledon', 'Theo Pinson', 'Thomas Bryant', 'Thomas Bryant', 'Thomas Bryant', 'Tim Hardaway Jr.', 'Tobias Harris', 'Tony Bradley', 'Torrey Craig', 'Trae Young', 'Tre Jones', 'Tre Mann', 'Trendon Watford', 'Trent Forrest', 'Trevelin Queen', 'Trevor Hudgins', 'Trevor Keels', 'Trey Lyles', 'Trey Murphy III', 'Troy Brown Jr.', 'Ty Jerome', 'TyTy Washington Jr.', 'Tyler Dorsey', 'Tyler Herro', 'Tyrese Haliburton', 'Tyrese Martin', 'Tyrese Maxey', 'Tyus Jones', 'Udoka Azubuike', 'Udonis Haslem', 'Usman Garuba', 'Vernon Carey Jr.', 'Victor Oladipo', 'Vince Williams Jr.', 'Vit Krejci', 'Vlatko Cancar', 'Walker Kessler', 'Wendell Carter Jr.', 'Wendell Moore Jr.', 'Wenyen Gabriel', 'Wesley Matthews', 'Will Barton', 'Will Barton', 'Will Barton', 'Willy Hernangomez', 'Xavier Cooks', 'Xavier Moon', 'Xavier Sneed', 'Xavier Tillman Sr.', 'Yuta Watanabe', 'Zach Collins', 'Zach LaVine', 'Zeke Nnaji', 'Ziaire Williams', 'Zion Williamson']



const button = document.getElementById("button");

// Get the player names from the input fields
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");

// Get the elements where we will input player names
const changeName1 = document.getElementById("name1");
const changeName2 = document.getElementById("name2");

// Get the elements where we will input player one's data
const playerOnePPG = document.getElementById("ppg");
const playerOneAPG = document.getElementById("apg");
const playerOneRPG = document.getElementById("rpg");

// Get the elements where we will input player two's data
const playerTwoPPG = document.getElementById("ppg2");
const playerTwoAPG = document.getElementById("apg2");
const playerTwoRPG = document.getElementById("rpg2");

const element = document.getElementById('comp1');
const element2 = document.getElementById('comp2');

function loadData(theArray, theElement){
    theElement.innerHTML = '';
    for (let i=0; i<theArray.length; i++){
        var currPlayer = theArray[i];
        const list = `<li onclick="random(${i})" id=${i}>${currPlayer}</li>`;
        theElement.innerHTML += list;
    }
}

function loadData2(theArray, theElement){
    theElement.innerHTML = '';
    for (let i=0; i<theArray.length; i++){
        var currPlayer = theArray[i];
        const list = `<li onclick="random(${i+1000})" id=${i+1000}>${currPlayer}</li>`;
        theElement.innerHTML += list;
    }
}



function filterData(data, searchText){
    return data.filter((x) => x.toLowerCase().includes(searchText.toLowerCase()));

}

player1.addEventListener('input', function(){
    const filteredData = filterData(players, player1.value);
    console.log(filteredData);
    loadData(filteredData, element)
});

player2.addEventListener('input', function(){
    const filteredData = filterData(players, player2.value);
    console.log(filteredData);
    loadData2(filteredData, element2)
});

// Returns the id of a player given their name ex {Lebron James}
async function getID(name){
    const url = `https://www.balldontlie.io/api/v1/players?search=${name}`;
    const getInfo = await fetch(url);
    const data = await getInfo.json();
    const id = data.data[0].id;
    
    return id;
}

// Takes the ID of player and returns their PPG, RPG, APG in an array
async function getData(playerID){
    const url = `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${playerID}&season=2022`;
    const getInfo = await fetch(url);
    const data = await getInfo.json();
    var stats = Array();

    stats.push(data.data[0].pts);
    stats.push(data.data[0].ast);
    stats.push(data.data[0].reb);

    console.log(stats);

    return stats;
}

// Takes the array of data and places player data on the screen accordingly
function placeDataOnScreen(ppgLocation, apgLocation, rpgLocation, ppg1, apg1, rpg1){
    const playerPoints = ppg1;
    const playerAssists = apg1;
    const playerRebounds = rpg1;

    const ppg = `${playerPoints} PPG`;
    const apg = `${playerAssists} APG`;
    const rpg = `${playerRebounds} RPG`;

    ppgLocation.innerHTML = ppg;
    apgLocation.innerHTML = apg;
    rpgLocation.innerHTML = rpg;
}




function findNames(){
    var names = Array();

    if (player1.value.length >= 1){
        const nameOneArr = player1.value.split(" ");
        for (var i = 0; i < nameOneArr.length; i++){
            nameOneArr[i] = nameOneArr[i].charAt(0).toUpperCase() + nameOneArr[i].slice(1);
        }
        const nameOne = nameOneArr.join(" ");
        changeName1.innerHTML = nameOne;
        names.push(player1.value);
    }
    else{
        changeName1.innerHTML = "Player 1";
    }

    if (player2.value.length >= 1){
        const nameTwoArr = player2.value.split(" ");
        for (var i = 0; i < nameTwoArr.length; i++){
            nameTwoArr[i] = nameTwoArr[i].charAt(0).toUpperCase() + nameTwoArr[i].slice(1);
        }
        const nameTwo = nameTwoArr.join(" ");
        changeName2.innerHTML = nameTwo;
        names.push(player2.value);
    }
    else{
        changeName2.innerHTML = "Player 2";
    }

    (getID(names[0]).then(val => (getData(val).then(x => placeDataOnScreen(playerOnePPG, playerOneAPG, playerOneRPG, x[0], x[1], x[2])))));
    (getID(names[1]).then(val => (getData(val).then(x => placeDataOnScreen(playerTwoPPG, playerTwoAPG, playerTwoRPG, x[0], x[1], x[2])))));


}


function random(idValue){
    const playerName = document.getElementById(idValue);
    if (idValue >= 1000){
        player2.value = playerName.innerHTML;
    }
    else{
        player1.value = playerName.innerHTML;
    }
    element.innerHTML = '';
    element2.innerHTML = '';
}
