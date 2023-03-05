var express = require("express");

const app = express();

var cors = require('cors');
app.use(cors());

let Kheer = {
    Dish_Name : "Kheer",
    Dish_Type : "Vegetarian",
    Recipe : `Boil the rice and milk in a deep pan. Simmer over low flame, stirring occasionally 
    till the rice is cooked and the milk becomes thick. When done add sugar, raisins and cardamoms. 
    Stir till sugar gets dissolved properly. Transfer into a serving dish and garnish with almonds. 
    Serve hot or chilled.`,
    Demo : "https://youtu.be/Bg9iXV8GDVw"
} 

let Briyani = {
    Dish_Name : "Chicken Briyani",
    Dish_Type : "Non-Vegetarian",
    Recipe : `Clean the chicken breast and cut into medium size pieces. Keep aside.
    Mix ginger, garlic, green chillies, sesame seeds, cashew nuts and almonds in the mixer grinder.
    Grind to make a smooth paste.
    In a big bowl combine the chicken, yogurt, above ground paste, salt, lemon juice, red chilli powder, turmeric powder, coriander powder, garam masala powder, coriander and mint chopped. Mix very well and cover the bowl.
    Refrigerate  the marinated chicken for 2-3 hours.
    Boil the eggs, remove the outer layer and cut each egg into 2 pieces. Keep aside. Wash the rice thoroughly in normal running water and boil them in 4 cups of water by adding little amount of salt. Heat sufficient oil in a pan, deep fry the slices of onion until browned and remove on oil absorbent paper. Heat 2 tbsp of oil in a non-stick pan and add whole garam masala.
    Saute for few seconds and now add thinly chopped onion along with thinly chopped green chillies. Saute until onion translucent.
    Add the marinated chicken pieces and mix well. Stir the chicken on low flame for 4-5 minutes. When the chicken seems almost done, then spread a layer of basmati rice over the chicken.
    Sprinkle little bit of salt and turmeric powder. Also sprinkle half of the brown onions, food color, chopped coriander and mint leaves.
    Mix very gently on low heat by adding remaining oil. Mix very well to coat the chicken in rice. Stir just for few more seconds on low flame.`,
    Demo : "https://youtu.be/95BCU1n268w"
}

let chappathi = {
    Dish_Name : "Chappathi",
    Dish_Type : "Vegetarian",
    Recipe : `Measure the amount of the atta flour, vegetable oil, and salt in a large mixing bowl. Some chapati recipes use only water and atta flour, nothing else! 
    The amount of water required depends on the type of flour used. It should be conservative to avoid it from becoming too wet and sticky.  You can reserve a teaspoon of water for each 100g of flour and add it to the dough while kneading if it is too dry. Once you have fixed the formula, you can, of course, add the exact amount without hesitation. In this chapati recipe, I use 75ml of water for 100g of the atta flour brand.
    Combine all the ingredients, then knead it until it picks up all the flour sticking on the mixing bowl.
    Continue kneading until it looks like plasticine, which you can leave an impression on it with your finger. 
    The easiest way is to knead it by pressing the dough with the knuckles and folding it to half after flattening it.
    The kneading process takes about five minutes for a small dough made with 100g of flour.  When you can make a clear indented mark on the dough’s surface with your fingers, it is done. 
    You can adjust the dough’s softness during kneading by either adding more water or flour if necessary.`,
    Demo : "https://youtu.be/ENXQ5lm4_fU"
}

let cholebature = {
    Dish_Name : "Chole Bature",
    Dish_Type : "Vegetarian",
    Recipe : `firstly, in a large bowl take 2 cup maida, 2 tbsp rava, 1 tsp sugar, ¼ tsp baking soda, 1 tsp sugar, ½ tsp salt and 2 tbsp oil. mix well.
    now add ¼ cup curd and mix well making sure everything is well combined. further, add water as required and knead the dough.
    knead to the smooth and soft dough without putting much pressure. grease the dough with oil, cover and rest for 2 hours.
    after 2 hours, knead the dough slightly. pinch a ball sized dough and make a ball without any cracks. roll slightly thick, applying oil to prevent from sticking.
    drop the rolled dough into the hot oil. press until the bhature puffs up and splash oil to puff up fully.
    flip over and fry until it turns golden brown. finally, drain off the bhatura. firstly, in a pressure cooker take soaked chana. i have soaked 1 cup chana in enough water for 8 hours.
    add 2 tea bags, ¼ tsp baking soda, 1 tsp salt and 3 cup water. soda helps to cook chole well. cover and pressure cook for 5 whistles. if you do not have tea bags, then you can prepare tea decoction and add to cooker.
    once the pressure releases, open the cooker and discard the tea bags. keep aside. in a large kadai, heat 2 tbsp oil, 1 bay leaf, 1 black cardamom, 2 pod cardamom, 1 inch cinnamon, 1 tsp cumin, ½ tsp kasuri methi. saute on low flame until the spices turn aroamtic.
    now add 1 onion, 1 tsp ginger garlic paste and saute until onions turn golden brown. add ¼ tsp turmeric, 1 tsp chilli powder, 1 tsp coriander powder, ½ tsp cumin powder, ½ tsp garam masala, 1 tsp aamchur and ¼ tsp salt.
    saute on low flame until the spices turn aromatic. further add 1½ cup tomato puree and saute until the oil separates. to prepare tomato puree, i have blended 2½ ripened tomatoes in blender without adding water.
    now add boiled chole and mix well. adjust consistency by adding water if required. cover and simmer for 10 minutes, or until chole absorbs all the flavour.
    to prepare the tempering, heat 1 tbsp ghee in a pan. add 2 chilli, ¼ tsp turmeri, ¼ tsp chilli powder and ¼ tsp garam masala.
    saute on low flame without burning the spices. pour the tempering over the chole masala, add 2 tbsp coriander and mix well.
    finally, chole bhature is ready to enjoy.`,
    Demo : "https://youtu.be/8tLKTNTt-lU"
}

let lassi = {
    Dish_Name : "Lassi",

    Dish_Type : "Vegetarian",

    Recipe : `Take yogurt and sugar in a large bowl. 
    Beat it using a churner until sugar dissolves and the yogurt gets smooth.
    Add cardamom powder and rose water.
    Add the chilled water.
    Beat it again.
    It should be frothy and that’s the perfect lassi texture.`,
    
    Demo : "https://youtu.be/E-eWorf6fmg"
}

let maggi = {
    Dish_Name : "Maggi",
    Dish_Type : "Vegetarian",
    Recipe : `firstly, in pan heat 2 tsp oil and saute 2 clove garlic and ½ onion.
    add ½ carrot, 2 tbsp capsicum, ½ tomato and 2 tbsp sweet corn.
    saute until the vegetables turn crunchy.
    further add ¼ tsp turmeric, ½ tsp chilli powder, ¼ tsp salt and saute until the spices turn aromatic.
    add 1 cup water and get to a boil.
    now bread 1 pack maggi noodles roughly and add 1 pack tastemaker.
    mix well and boil for 2 minutes or until the noodles are cooked well. finally enjoy your Maggi`,
    Demo : "https://youtu.be/HZno_fFusw0"
}

let poha = {
    Dish_Name : "Poha",
    Dish_Type : "Vegetarian",
    Recipe : `I usually use medium or thick (preferred) variety of poha for this recipe. Thin poha will become quite mushy and you won't get the right texture.
    Rinse the poha till it becomes soft and let it rest in the colander while you prep and sauté the onions and potatoes.
    While adding the potatoes to the poha, make sure to dice them up real small so that they cook quickly.
    You can add peanuts for an extra bit of crunch and a touch of sugar will give a wonderful taste. I highly recommend to not skip the sugar, as it balances the flavors very well.
    In case your poha seems a dry bit, just sprinkle some water and mix it once.
    Garnishes are always a must for poha. The popular ones are lime juice, sev, and cilantro. You can also add sev or bhujia and pomegranate seeds.
    Poha is always best enjoyed immediately, but if you are storing it for later use, then keep it in an airtight container.`,
    Demo : "https://youtu.be/2_BkfGRcx3o"
}

let panipuri = {
    Dish_Name : "Pani Puri",
    Dish_Type : "Vegetarian",
    Recipe : `For the puri dough, I use mainly semolina or sooji and a small quantity of wheat flour as a binding agent. Look for fine semolina 
    Add hot (but not boiling) water VERY CAREFULLY while mixing the dough, too much water can result in soggy fried lumps rather than crispy puris. The dough should be firm and not too soft
    It’s important to knead the dough well till it starts feeling smooth
    Roll the dough out as thin and evenly or else they WILL get soggy. If the dough is unevenly rolled out, it will result in thick edges or spots that won’t puff up
    You can either make small balls of dough and roll out individual puris, or roll out a bigger circle of dough evenly and use a cutter to cut circles in it
    When frying the puris, the oil’s temperature has to be controlled between medium to high flame. This will help the puris puff up instantly, and cook them properly so that they remain crisp even after cooling down
    Gently tap the puris in oil while frying for evenly puffed puris The pani puri water is what binds all the
    components together and makes the filling-filled puris such a fun experience! I make my version of 
    jaljeera with a host of spices and seasonings that boost the flavour of the pani. It is all about getting the balance right for a sweet, spicy, tangy, and sour pani. You can customise it according
    to your taste preferences. Make sure the pudina leaves are super fresh for a fresh flavour.`,
    Demo : "https://youtu.be/S8IP13pCNyM"
}

app.get('/kheer', (req,res)=>{
   /* res.send(`
    <div style= "background-image: url('https://www.cardiffandvalersb.co.uk/wp-content/uploads/bigstock-Abstract-light-shade-Backgroun-50060303.jpg'); 
    background-size:cover; background-position: center;"><div>
    <center><img style="width:100%; height:60%"src="http://foodandremedy.com/wp-content/uploads/2016/10/Rice-Kheer-3.jpg" alt="" /></center>
    <center><h2>Recipe For Kheer....</h2></center> 
    <h3>Dish_Name: Kheer</h3>
    <h3>Dish_Type: Vegetarian</h3>
    <h3>Recipe: Boil the rice and milk in a deep pan. Simmer over low flame, stirring occasionally 
        till the rice is cooked and the milk becomes thick. When done add sugar, raisins and cardamoms. 
        Stir till sugar gets dissolved properly. Transfer into a serving dish and garnish with almonds. 
        Serve hot or chilled.</h3>
    <h3>Demo: <button><a href="https://youtu.be/Bg9iXV8GDVw" target="_blank">PLAY DEMO<a></button></h3>
    <center><h2><i>Please Rate the Dish after you taste....</i>&#128522;</h2></center>
    <br/>
    <br/>
    <br/>
   </div>
   </div>`
       );*/
       res.send(Kheer);
 });

app.get('/briyani',(req,res)=>{
    /*res.send(`<div style= "background-image: url('https://tse2.mm.bing.net/th?id=OIP.u7WE_t7bdE9H5dgD3RxWYQHaEo&pid=Api&P=0'); 
     background-size:cover; background-position: center;">
     <center><img style="width:100%; height:55%"src="https://i.ytimg.com/vi/Rhc5DdRatCI/maxresdefault.jpg" alt="" /></center>
    <center><h2>Recipe For Chicken Briyani....</h2></center> 
    <h3>Dish_Name: Chicken Briyani</h3>
    <h3>Dish_Type: Non Vegetarian</h3>
    <h3>Recipe: Clean the chicken breast and cut into medium size pieces. Keep aside.
    Mix ginger, garlic, green chillies, sesame seeds, cashew nuts and almonds in the mixer grinder.
    Grind to make a smooth paste.
    In a big bowl combine the chicken, yogurt, above ground paste, salt, lemon juice, red chilli powder, turmeric powder, coriander powder, garam masala powder, coriander and mint chopped. Mix very well and cover the bowl.
    Refrigerate  the marinated chicken for 2-3 hours.
    Boil the eggs, remove the outer layer and cut each egg into 2 pieces. Keep aside. Wash the rice thoroughly in normal running water and boil them in 4 cups of water by adding little amount of salt. Heat sufficient oil in a pan, deep fry the slices of onion until browned and remove on oil absorbent paper. Heat 2 tbsp of oil in a non-stick pan and add whole garam masala.
    Saute for few seconds and now add thinly chopped onion along with thinly chopped green chillies. Saute until onion translucent.
    Add the marinated chicken pieces and mix well. Stir the chicken on low flame for 4-5 minutes. When the chicken seems almost done, then spread a layer of basmati rice over the chicken.
    Sprinkle little bit of salt and turmeric powder. Also sprinkle half of the brown onions, food color, chopped coriander and mint leaves.
    Mix very gently on low heat by adding remaining oil. Mix very well to coat the chicken in rice. Stir just for few more seconds on low flame.</h3>
    <h3>Demo: <button><a href="https://youtu.be/95BCU1n268w" target="_blank">PLAY DEMO<a></button></h3>
    <center><h2><i>Please Rate the Dish after you taste....</i>&#128522;</h2></center>
    <br/>
    <br/>
    <br/>
   </div>
    `);*/
    res.send(Briyani);
});

app.get('/chappathi',(req,res)=>{
    /*res.send(`<div style= "background-image: url('https://images.all-free-download.com/images/graphiclarge/red_shading_background_05_hd_pictures_169759.jpg'); 
    background-size:cover; background-position: center;">
    <center><img style="width:100%; height:55%"src="https://tse4.mm.bing.net/th?id=OIP.mmOKrBoWZ3DfE1ETqPHd4QHaEK&pid=Api&P=0" alt="" /></center>
   <center><h2 style="color:white">Recipe For Chappathi....</h2></center> 
   <h3 style="color:white">Dish_Name: Chappathi</h3>
   <h3 style="color:white">Dish_Type: Vegetarian</h3>
   <h3 style="color:white">Recipe: Measure the amount of the atta flour, vegetable oil, and salt in a large mixing bowl. Some chapati recipes use only water and atta flour, nothing else! 
   The amount of water required depends on the type of flour used. It should be conservative to avoid it from becoming too wet and sticky.  You can reserve a teaspoon of water for each 100g of flour and add it to the dough while kneading if it is too dry. Once you have fixed the formula, you can, of course, add the exact amount without hesitation. In this chapati recipe, I use 75ml of water for 100g of the atta flour brand.
   Combine all the ingredients, then knead it until it picks up all the flour sticking on the mixing bowl.
   Continue kneading until it looks like plasticine, which you can leave an impression on it with your finger. 
   The easiest way is to knead it by pressing the dough with the knuckles and folding it to half after flattening it.
   The kneading process takes about five minutes for a small dough made with 100g of flour.  When you can make a clear indented mark on the dough’s surface with your fingers, it is done. 
   You can adjust the dough’s softness during kneading by either adding more water or flour if necessary.</h3>
   <h3 style="color:white">Demo: <button><a href="https://youtu.be/ENXQ5lm4_fU" target="_blank">PLAY DEMO<a></button></h3>
   <center><h2 style="color:white"><i>Please Rate the Dish after you taste....</i>&#128522;</h2></center>
   <br/>
   <br/>
   <br/>
  </div>`);*/
  res.send(chappathi);
});

app.get('/cholebature',(req,res)=>{
    /*res.send(`<div style= "background-image: url('https://tse2.mm.bing.net/th?id=OIP.Y8oGqDt5b9hBEK26IkKtrAHaEK&pid=Api&P=0'); 
    background-size:cover; background-position: center;">
    <center><img style="width:100%; height:55%"src="https://tse1.mm.bing.net/th?id=OIP.fRteHCm-dsF3hL6XwZaIdgHaE4&pid=Api&P=0" alt="" /></center>
   <center><h2>Recipe For Chole Bature....</h2></center> 
   <h3>Dish_Name: Chole Bature</h3>
   <h3>Dish_Type: Vegetarian</h3>
   <h3>Recipe: firstly, in a large bowl take 2 cup maida, 2 tbsp rava, 1 tsp sugar, ¼ tsp baking soda, 1 tsp sugar, ½ tsp salt and 2 tbsp oil. mix well.
   now add ¼ cup curd and mix well making sure everything is well combined. further, add water as required and knead the dough.
   knead to the smooth and soft dough without putting much pressure. grease the dough with oil, cover and rest for 2 hours.
   after 2 hours, knead the dough slightly. pinch a ball sized dough and make a ball without any cracks. roll slightly thick, applying oil to prevent from sticking.
   drop the rolled dough into the hot oil. press until the bhature puffs up and splash oil to puff up fully.
   flip over and fry until it turns golden brown. finally, drain off the bhatura. firstly, in a pressure cooker take soaked chana. i have soaked 1 cup chana in enough water for 8 hours.
   add 2 tea bags, ¼ tsp baking soda, 1 tsp salt and 3 cup water. soda helps to cook chole well. cover and pressure cook for 5 whistles. if you do not have tea bags, then you can prepare tea decoction and add to cooker.
   once the pressure releases, open the cooker and discard the tea bags. keep aside. in a large kadai, heat 2 tbsp oil, 1 bay leaf, 1 black cardamom, 2 pod cardamom, 1 inch cinnamon, 1 tsp cumin, ½ tsp kasuri methi. saute on low flame until the spices turn aroamtic.
   now add 1 onion, 1 tsp ginger garlic paste and saute until onions turn golden brown. add ¼ tsp turmeric, 1 tsp chilli powder, 1 tsp coriander powder, ½ tsp cumin powder, ½ tsp garam masala, 1 tsp aamchur and ¼ tsp salt.
   saute on low flame until the spices turn aromatic. further add 1½ cup tomato puree and saute until the oil separates. to prepare tomato puree, i have blended 2½ ripened tomatoes in blender without adding water.
   now add boiled chole and mix well. adjust consistency by adding water if required. cover and simmer for 10 minutes, or until chole absorbs all the flavour.
   to prepare the tempering, heat 1 tbsp ghee in a pan. add 2 chilli, ¼ tsp turmeri, ¼ tsp chilli powder and ¼ tsp garam masala.
   saute on low flame without burning the spices. pour the tempering over the chole masala, add 2 tbsp coriander and mix well.
   finally, chole bhature is ready to enjoy.</h3>
   <h3 style="color:black">Demo: <button><a href="https://youtu.be/8tLKTNTt-lU" target="_blank">PLAY DEMO<a></button></h3>
   <center><h2><i>Please Rate the Dish after you taste....</i>&#128522;</h2></center>
   <br/>
   <br/>
   <br/>
  </div>`);*/
  res.send(cholebature);
});

app.get('/lassi',(req,res)=>{
    /*res.send(`<div style= "background-image: url('https://tse4.mm.bing.net/th?id=OIP.JxHmAVUh5tsnuPN7mEoVigHaEK&pid=Api&P=0'); 
    background-size:cover; background-position: center;">
    <center><img style="width:100%; height:55%"src="https://tse2.mm.bing.net/th?id=OIP.7Z4yE17VqWQ3yM3HY3KiLAHaGX&pid=Api&P=0" alt="" /></center>
   <center><h2>Recipe For Lassi....</h2></center> 
   <h3>Dish_Name: Lassi</h3>
   <h3>Dish_Type: Vegetarian</h3>
   <h3>Recipe: Take yogurt and sugar in a large bowl. 
   Beat it using a churner until sugar dissolves and the yogurt gets smooth.
   Add cardamom powder and rose water.
   Add the chilled water.
   Beat it again.
   It should be frothy and that’s the perfect lassi texture.</h3>
   <h3 style="color:black">Demo: <button><a href="https://youtu.be/E-eWorf6fmg" target="_blank">PLAY DEMO<a></button></h3>
   <center><h2><i>Please Rate the Dish after you taste....</i>&#128522;</h2></center>
   <br/>
   <br/>
   <br/>
  </div>`);*/
  res.send(lassi);
});

app.get('/maggi',(req,res)=>{
    /*res.send(`<div style= "background-image: url('https://tse4.mm.bing.net/th?id=OIP.g8S3mVw2qAB6QJSEvIPLbwHaEo&pid=Api&P=0'); 
    background-size:cover; background-position: center;">
    <center><img style="width:100%; height:55%"src="https://tse2.mm.bing.net/th?id=OIP.TrHlR5V88SQHciAP7pPRVgHaDt&pid=Api&P=0" alt="" /></center>
   <center><h2>Recipe For Maggi....</h2></center> 
   <h3>Dish_Name: Maggi</h3>
   <h3>Dish_Type: Vegetarian</h3>
   <h3>Recipe: firstly, in pan heat 2 tsp oil and saute 2 clove garlic and ½ onion.
   add ½ carrot, 2 tbsp capsicum, ½ tomato and 2 tbsp sweet corn.
   saute until the vegetables turn crunchy.
   further add ¼ tsp turmeric, ½ tsp chilli powder, ¼ tsp salt and saute until the spices turn aromatic.
   add 1 cup water and get to a boil.
   now bread 1 pack maggi noodles roughly and add 1 pack tastemaker.
   mix well and boil for 2 minutes or until the noodles are cooked well. finally enjoy your Maggi</h3>
   <h3 style="color:black">Demo: <button><a href="https://youtu.be/HZno_fFusw0" target="_blank">PLAY DEMO<a></button></h3>
   <center><h2><i>Please Rate the Dish after you taste....</i>&#128522;</h2></center>
   <br/>
   <br/>
   <br/>
  </div>`);*/
  res.send(maggi);
});

app.get('/poha',(req,res)=>{
    /*res.send(`<div style= "background-image: url('https://tse4.mm.bing.net/th?id=OIP.-MQXUpaDcTljr0pd7CwdEQHaE8&pid=Api&P=0'); 
    background-size:cover; background-position: center;">
    <center><img style="width:100%; height:55%"src="https://tse2.mm.bing.net/th?id=OIP.ZZM7hpzggMa6bYt8MpM6JQHaEK&pid=Api&P=0" alt="" /></center>
   <center><h2 style="color:white">Recipe For Poha....</h2></center> 
   <h3 style="color:white">Dish_Name: Poha</h3>
   <h3 style="color:white">Dish_Type: Vegetarian</h3>
   <h3 style="color:white">Recipe: I usually use medium or thick (preferred) variety of poha for this recipe. Thin poha will become quite mushy and you won't get the right texture.
   Rinse the poha till it becomes soft and let it rest in the colander while you prep and sauté the onions and potatoes.
   While adding the potatoes to the poha, make sure to dice them up real small so that they cook quickly.
   You can add peanuts for an extra bit of crunch and a touch of sugar will give a wonderful taste. I highly recommend to not skip the sugar, as it balances the flavors very well.
   In case your poha seems a dry bit, just sprinkle some water and mix it once.
   Garnishes are always a must for poha. The popular ones are lime juice, sev, and cilantro. You can also add sev or bhujia and pomegranate seeds.
   Poha is always best enjoyed immediately, but if you are storing it for later use, then keep it in an airtight container.</h3>
   <h3 style="color:white">Demo: <button><a href="https://youtu.be/2_BkfGRcx3o" target="_blank">PLAY DEMO<a></button></h3>
   <center><h2 style="color:white"><i>Please Rate the Dish after you taste....</i>&#128522;</h2></center>
   <br/>
   <br/>
   <br/>
  </div>`);*/
  res.send(poha);
});

app.get('/panipuri',(req,res)=>{
    /*res.send(`<div style= "background-image: url('https://tse1.mm.bing.net/th?id=OIP.UNX05tVlbAu8V8DDLpC2tQHaDe&pid=Api&P=0'); 
    background-size:cover; background-position: center;">
    <center><img style="width:100%; height:55%"src="https://tse1.mm.bing.net/th?id=OIP.kv3LFCez3FCLlMWvObJoJgHaEK&pid=Api&P=0" alt="" /></center>
   <center><h2 style="color:white">Recipe For Pani Puri....</h2></center> 
   <h3 style="color:white">Dish_Name: Pani Puri</h3>
   <h3 style="color:white">Dish_Type: Vegetarian</h3>
   <h3 style="color:white">Recipe: For the puri dough, I use mainly semolina or sooji and a small quantity of wheat flour as a binding agent. Look for fine semolina 
   Add hot (but not boiling) water VERY CAREFULLY while mixing the dough, too much water can result in soggy fried lumps rather than crispy puris. The dough should be firm and not too soft
   It’s important to knead the dough well till it starts feeling smooth
   Roll the dough out as thin and evenly or else they WILL get soggy. If the dough is unevenly rolled out, it will result in thick edges or spots that won’t puff up
   You can either make small balls of dough and roll out individual puris, or roll out a bigger circle of dough evenly and use a cutter to cut circles in it
   When frying the puris, the oil’s temperature has to be controlled between medium to high flame. This will help the puris puff up instantly, and cook them properly so that they remain crisp even after cooling down
   Gently tap the puris in oil while frying for evenly puffed puris The pani puri water is what binds all the
   components together and makes the filling-filled puris such a fun experience! I make my version of 
   jaljeera with a host of spices and seasonings that boost the flavour of the pani. It is all about getting the balance right for a sweet, spicy, tangy, and sour pani. You can customise it according
   to your taste preferences. Make sure the pudina leaves are super fresh for a fresh flavour.</h3>
   <h3 style="color:white">Demo: <button><a href="https://youtu.be/S8IP13pCNyM" target="_blank">PLAY DEMO<a></button></h3>
   <center><h2 style="color:white"><i>Please Rate the Dish after you taste....</i>&#128522;</h2></center>
   <br/>
   <br/>
   <br/>
  </div>`);*/
  res.send(panipuri);
});

app.listen(4000,()=>{
    console.log("Server started...")
});