//tasks.js

//v7.1.0
//Some special character that listed 
//in INCORRECT_SET in database.js will
//be replaced to inputable characters automatically.

//All the Article Groups you define here will be
//passed to dv.js in the same directory, and then
//you are free to choose the Article Groups you want
//to practice with in dv.js.

/*
 * 格式：
 * 一个大括号内表示一个文章组，
 * 每个文章组包括文章组名(articleGroupName)和任务文本数组(articlesArray)
 * 两者缺一不可。
 * var __task_ArticleGroups = [ 
    { 
        articleGroupName:"Your Name",
        articlesArray: ["para1", "para2", "para3"]
    },
    { 
        articleGroupName:"His Name",
        articlesArray: ["para4", "para5", "para6"]
    },
    { 
        articleGroupName:"Her Name",
        articlesArray: ["para7", "para8", "para9"]
    }]; 
 * 大体是这样的：
 * var __task_ArticleGroups = [{...}, {...}, {...}, ... , {...}];
 * 每一个文章组有：
 * {
 *     articleGroupName: "...",
 *     articlesArray: ["...", "...", "...", "..."]
 * }
 */

var __task_ArticleGroups = [
    {
        articleGroupName: "名句集",
        articlesArray: [
            "Where there is a will, there is a way.",
            "I came, I saw, I conquered.",
            "Variety is the spice of life.",
            "You can't judge a tree by its bark.",
            "Sharp tools make good work.",
            "Death comes to all, but great achievements raise a monument which shall endure until the sun grows old.",
            "A fall into the pit, a gain in your wit.",
            "Bad luck often brings good luck.",
            "A young idler, an old beggar.",
            "All for one, one for all.",
            "A friend in need is a friend indeed.",
            "The journey of a thousand miles begins with a single step.",
            "More haste, less speed.",
            "Never too old to learn.",
            "Practice makes perfect.",
            "God helps those who help themselves.",
            "One false step will make a great difference.",
            "Great minds think alike.",
            "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do.",
            "I am who I am today because of the choices I made yesterday.",
            "I may not be perfect but at least I'm not fake.",
            "The remembrance of the past is the teacher of the future.",
            "A straight foot is not afraid of a crooked shoe."
        ]
    },
    {
        articleGroupName: "洛夫克拉夫特名句集",
        articlesArray: [
            "The oldest and strongest emotion of mankind is fear, and the oldest and strongest kind of fear is fear of the unknown.",
            "The most merciful thing in the world, I think, is the inability of the human mind to correlate all its contents. We live on a placid island of ignorance in the midst of black seas of the infinity, and it was not meant that we should voyage far.",
            "The world is indeed comic, but the joke is on mankind.",
            "No new horror can be more terrible than the daily torture of the commonplace.",
            "I am a student of life, and don't want to miss any experience. There's poetry in this sort of thing, you know--or perhaps you don't know, but it's all the same.",
            "To be bitter is to attribute intent and personality to the formless, infinite, unchanging and unchangeable void. We drift on a chartless, resistless sea. Let us sing when we can, and forget the rest",
            "Unhappy is he to whom the memories of childhood bring only fear and sadness.",
            "Ocean is more ancient than the mountains, and freighted with the memories and the dreams of time.",
            "If religion were true, its followers would not try to bludgeon their young into an artificial conformity; but would merely insist on their unbending quest for truth, irrespective of artificial backgrounds or practical consequences.",
            "That which we call substance and reality is shadow and illusion, and that which we call shadow and illusion is substance and reality.",
            "That is not dead which can eternal lie, and with strange aeons even death may die.",
            "It is a mistake to fancy that horror is associated inextricably with darkness, slience and solitude.",
            "I know always that I am an outsider; a stranger in this century and among those who are still men.",
            "I'a! Shub-Niggurath! The Black Goat of the Woods with a Thousand Young!"
        ]
    },
    {
        articleGroupName: "travelchinaguide.com选段",
        articlesArray: [
            "Being capital of the People's Republic of China, Beijing is the nation's political, economic, and cultural center. Located in north China, close to the port city of Tianjin and partially surrounded by Hebei Province, it also serves as the most important transportation hub and port of entry.<br>As one of the six ancient cities in China, Beijing has been the heart and soul of politics throughout its long history and consequently there is an unparalleled wealth of discovery to delight and intrigue travelers as they explore the city's ancient past and exciting modern development. Now it has become one of the most popular travel destinations in the world, with about 140 million Chinese tourists and 4.4 million international visitors in a year.<br>travelchinaguide.com",
            "Cuisine in China is a harmonious integration of color, redolence, taste, shape and the fineness of the instruments.  For the cooking process, chefs pick choice and various ingredients and seasonings while employing unparalleled complicated skills handed down from their fathers, ever aspiring to their ideal of perfection for all the senses. Among the many cooking methods they use are boiling, stewing, braising, frying, steaming, crisping, baking, and simmering and so on. When they finish their masterpieces they are arranged on a variety of plates and dishes so that they are a real pleasure to view, to smell and ultimately to savor.<br>travelchinaguide.com",
            "Chinese people consider the Hot Pot their first choice to hold a dinner party since it can satisfy all the people's taste. As its name indicates, the Hot Pot is cooked in a big wok which is placed on a stove to get continuously heated. Once the concocted soup is boiled, people put slices of meat and various vegetables into the wok and wait for them to be cooked through. The spicy Chongqing Hot Pot and Beijing Copper Pot featuring instant-boiled mutton are the two representatives of the China Hot Pot.<br>travelchinaguide.com",
            "For most Chinese, eating a basket of steaming stuffed buns and a bowl of porridge marks the most satisfying beginning of a day. If you walk along the streets in the morning, it is common to find people queuing in front of bamboo steamers of the breakfast stands or shops for a few buns. Chef often uses minced meat or vegetables to fill dough wrappers and then put these buns in a steamer for heating. The fillings vary from region to region. The most popular ones in northern areas are the mixture of ground pork and green onions, secondly mutton, leeks, sweetened bean paste, mushrooms, and cabbage, while people in southern cities prefer to use crab meat and roe to make the steamed buns. Among them, Tianjin Goubuli Steamed buns and Shanghai Nanxiang buns win great popularity throughout the country.<br>travelchinaguide.com",
            "Kung Pao Chicken<br>Flavor: spicy, salty and sweet<br>Ingredients: chicken breast, chili, peanuts<br>Cooking Methods: marinate, fry, stir-fry<br>1. Cut chicken breast into dices and marinate with salt, cooking wine and starch for 10 minutes.<br>2. Mix salt, white sugar, vinegar, cooking wine, soy sauce and a little starch in a small bowl, to make the seasoning sauce.<br>3. Fry peanuts to be well done, and place them aside.<br>4. Stir-fry dried chili with low heat, and add shallots. After, add marinated chicken diced, stir well and add the seasoning sauce.<br>5. Stir well and add fried shelled peanuts just before taking out.<br>Kung Pao Chicken is one of the most popular Chinese chicken dishes well known home and abroad.<br>travelchinaguide.com",
            "Twice-Cooked Pork<br>Flavor: salty, a little spicy, a little sweet aftertaste<br>Ingredients: streaky pork, thick broad-bean sauce, ginger, garlic bolts...<br>Cooking Methods: boil, stir-fry<br>Twice-Cooked Pork is one of the most famous Chinese meat dishes, which belongs to Sichuan cuisine. Boil the whole streaky pork with sliced ginger and cooking wine for 15 minutes. Skim the scum while boiling. Next, drain the pork out and slice it. Stir-fry the pork slices with thick broad-bean sauce and ginger slices. After, add chopped garlic bolts, sugar and salt successively to stir-fry well. It tastes spicy and aromatic.<br>travelchinaguide.com",
            "Scrambled Egg with Tomato<br>Benefits: antioxidative, protect angiocarpy, anti-cancer...<br>The main ingredients are eggs which contain high protein and tomatoes. This healthy Chinese food is easy to cook. The cooking method is frying, and the fragrance of tomatoes is permeated in to eggs during frying, which release the fishy smell of eggs and add flavor. The tomatoes give the dish a sour taste. <br>Other dishes made of Tomato: Tomato Slices with Sugar, Braised Beef Brisket with Tomato...<br>travelchinaguide.com",
            "Viewing the Chinese history record, you will find the Tang Dynasty was the most glistening historic period in China's history. Founded in 618 and ending in 907, the state, under the ruling of the Tang Emperors, became the most powerful and prosperous country in the world. Particularly, in this glorious period, the economy, politics, culture and military strength reached an unparalleled advanced level.<br>travelchinaguide.com",
            "I Ching, also Yi Jing or The Book of Changes, is thought to be the oldest and most abstruse classic in Chinese history. Reputedly, it originated with Fu Xi, who is a mythical sovereign being the first of the three primogenitors of Chinese civilization. It is also called Zhou Yi reputedly because it is not until the Western Zhou Dynasty that the whole context of I Ching was understood. The first king of Zhou, King Wen, concentrated on the study the mystery of changes when he was put in prison for seven years. It has been an aid to foretell the future and make decisions for thousands of years. However, it means more than a book of divination.<br>travelchinaguide.com",
            "In addition to eating dumplings and glutinous rice balls, Chinese also have a solar term custom of counting nine ('Shu Jiu') starting Winter Solstice, that is, from the Winter Solstice people calculated the number of days until a change of climate came about. Usually nine days is a section, there are a total of nine sections from the first Jiu to the ninth Jiu. In the folklore there is a widely prevailing ballad the general meaning of which is that: in the first and second Jiu (a section of 18 days), we can't take our hands outside; in the third and fourth Jiu we walk on the ice; in the fifth and sixth Jiu we see the light green willow; in the seventh Jiu river thaws and in the eighth swallows come; in the ninth cattle begin to work.<br>travelchinaguide.com",
            "Tea was first discovered and drunk in China. As the hometown of tea, China owns a deep tea culture from ancient times. For Chinese people, it is not only a popular beverage which is brewed with boiled water over cured leaves, with a lot of health benefits. Moreover, it keeps a central piece of Chinese traditional culture, attaching great importance to spiritual enjoyment and ethics. Today, China still accounts for 60% of tea plantations in the world and a great number of tea gardens scatter in more than 20 provinces throughout the country.<br>travelchinaguide.com"
        ]
    },
    {
        articleGroupName: "I have a dream -- Martin Luther King, Jr.",/*7.8.1*/
        articlesArray: [
            "1. I am happy to join with you today in what will go down in history as the greatest demonstration for freedom in the history of our nation.",
            "2. Five score years ago, a great American, in whose symbolic shadow we stand today, signed the Emancipation Proclamation. This momentous decree came as a great beacon light of hope to millions of Negro slaves who had been seared in the flames of withering injustice. It came as a joyous daybreak to end the long night of bad captivity.",
            "3. But one hundred years later, the Negro still is not free. One hundred years later, the life of the Negro is still sadly crippled by the manacles of segregation and the chains of discrimination. One hundred years later, the Negro lives on a lonely island of poverty in the midst of a vast ocean of material prosperity. One hundred years later, the Negro is still languished in the corners of American society and finds himself an exile in his own land. And so we've come here today to dramatize a shameful condition.",
            "4. In a sense we've come to our nation's capital to cash a check. When the architects of our republic wrote the magnificent words of the Constitution and the Declaration of Independence, they were signing a promissory note to which every American was to fall heir. This note was a promise that all men, yes, black men as well as white men, would be guaranteed the \"unalienable Rights\" of \"Life, Liberty and the pursuit of Happiness.\" It is obvious today that America has defaulted on this promissory note, insofar as her citizens of color are concerned. Instead of honoring this sacred obligation, America has given the Negro people a bad check, a check which has come back marked \"insufficient funds.\"",
            "5. But we refuse to believe that the bank of justice is bankrupt. We refuse to believe that there are insufficient funds in the great vaults of opportunity of this nation. And so, we've come to cash this check, a check that will give us upon demand the riches of freedom and the security of justice.",
            "6. We have also come to this hallowed spot to remind America of the fierce urgency of Now. This is no time to engage in the luxury of cooling off or to take the tranquilizing drug of gradualism. Now is the time to make real the promises of democracy. Now is the time to rise from the dark and desolate valley of segregation to the sunlit path of racial justice. Now is the time to lift our nation from the quicksands of racial injustice to the solid rock of brotherhood. Now is the time to make justice a reality for all of God's children.",
            "7. It would be fatal for the nation to overlook the urgency of the moment. This sweltering summer of the Negro's legitimate discontent will not pass until there is an invigorating autumn of freedom and equality. Nineteen sixty-three is not an end, but a beginning. And those who hope that the Negro needed to blow off steam and will now be content will have a rude awakening if the nation returns to business as usual. And there will be neither rest nor tranquility in America until the Negro is granted his citizenship rights. The whirlwinds of revolt will continue to shake the foundations of our nation until the bright day of justice emerges.",
            "8. But there is something that I must say to my people, who stand on the warm threshold which leads into the palace of justice: In the process of gaining our rightful place, we must not be guilty of wrongful deeds. Let us not seek to satisfy our thirst for freedom by drinking from the cup of bitterness and hatred. We must forever conduct our struggle on the high plane of dignity and discipline. We must not allow our creative protest to degenerate into physical violence. Again and again, we must rise to the majestic heights of meeting physical force with soul force.",
            "9. The marvelous new militancy which has engulfed the Negro community must not lead us to a distrust of all white people, for many of our white brothers, as evidenced by their presence here today, have come to realize that their destiny is tied up with our destiny. And they have come to realize that their freedom is inextricably bound to our freedom.",
            "10. We cannot walk alone.<br>And as we walk, we must make the pledge that we shall always march ahead.<br>We cannot turn back.<br>There are those who are asking the devotees of civil rights, \"When will you be satisfied?\" We can never be satisfied as long as the Negro is the victim of the unspeakable horrors of police brutality. We can never be satisfied as long as our bodies, heavy with the fatigue of travel, cannot gain lodging in the motels of the highways and the hotels of the cities. We cannot be satisfied as long as the Negro's basic mobility is from a smaller ghetto to a larger one. We can never be satisfied as long as our children are stripped of their selfhood and robbed of their dignity by signs stating \"for whites only.\" We cannot be satisfied as long as a Negro in Mississippi cannot vote and a Negro in New York believes he has nothing for which to vote. No, no, we are not satisfied, and we will not be satisfied until \"justice rolls down like waters, and righteousness like a mighty stream.\"",
            "11. I am not unmindful that some of you have come here out of great trials and tribulations. Some of you have come fresh from narrow jail cells. And some of you have come from areas where your quest -- quest for freedom left you battered by the storms of persecution and staggered by the winds of police brutality. You have been the veterans of creative suffering. Continue to work with the faith that unearned suffering is redemptive. Go back to Mississippi, go back to Alabama, go back to South Carolina, go back to Georgia, go back to Louisiana, go back to the slums and ghettos of our northern cities, knowing that somehow this situation can and will be changed.",
            "12. Let us not wallow in the valley of despair, I say to you today, my friends.<br>And so even though we face the difficulties of today and tomorrow, I still have a dream. It is a dream deeply rooted in the American dream.<br>I have a dream that one day this nation will rise up and live out the true meaning of its creed: \"We hold these truths to be self-evident, that all men are created equal.\"<br>I have a dream that one day on the red hills of Georgia, the sons of former slaves and the sons of former slave owners will be able to sit down together at the table of brotherhood.<br>I have a dream that one day even the state of Mississippi, a state sweltering with the heat of injustice, sweltering with the heat of oppression, will be transformed into an oasis of freedom and justice.<br>I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.",
            "13. I have a dream today!<br>I have a dream that one day, down in Alabama, with its vicious racists, with its governor having his lips dripping with the words of \"interposition\" and \"nullification\" -- one day right there in Alabama little black boys and black girls will be able to join hands with little white boys and white girls as sisters and brothers.<br>I have a dream today!<br>I have a dream that one day every valley shall be exalted, and every hill and mountain shall be made low, the rough places will be made plain, and the crooked places will be made straight; \"and the glory of the Lord shall be revealed and all flesh shall see it together.\"<br>This is our hope, and this is the faith that I go back to the South with.",
            "14. With this faith, we will be able to hew out of the mountain of despair a stone of hope. With this faith, we will be able to transform the jangling discords of our nation into a beautiful symphony of brotherhood. With this faith, we will be able to work together, to pray together, to struggle together, to go to jail together, to stand up for freedom together, knowing that we will be free one day.",
            "15. And this will be the day -- this will be the day when all of God's children will be able to sing with new meaning:<br>My country 'tis of thee, sweet land of liberty, of thee I sing.<br>Land where my fathers died, land of the Pilgrim's pride,<br>From every mountainside, let freedom ring!<br>And if America is to be a great nation, this must become true.",
            "16. And so let freedom ring from the prodigious hilltops of New Hampshire.<br>Let freedom ring from the mighty mountains of New York.<br>Let freedom ring from the heightening Alleghenies of<br>Pennsylvania.<br>Let freedom ring from the snow-capped Rockies of Colorado.<br>Let freedom ring from the curvaceous slopes of California.<br>But not only that:<br>Let freedom ring from Stone Mountain of Georgia.<br>Let freedom ring from Lookout Mountain of Tennessee.<br>Let freedom ring from every hill and molehill of Mississippi.<br>From every mountainside, let freedom ring.",
            "17. And when this happens, when we allow freedom ring, when we let it ring from every village and every hamlet, from every state and every city, we will be able to speed up that day when all of God's children, black men and white men, Jews and Gentiles, Protestants and Catholics, will be able to join hands and sing in the words of the old Negro spiritual:<br>Free at last! Free at last!<br>Thank God Almighty, we are free at last!"
        ]
    }
];