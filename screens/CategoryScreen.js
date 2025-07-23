
// import React, { useState, useMemo } from "react";
// import { View, Text, TouchableOpacity, ScrollView } from "react-native";
// import TopNav from "../components/TopNav";
// import ProductListComponent from "../components/ProductListComponent";

// const subcategories = {
//   All: [
//     "Official dress",
//     "Casual dress",
//     "Beachwear",
//     "Sportswear",
//     "Nightwear",
//     "Footwear",
//     "Bags",
//     "Jewelry",
//     "Electronics",
//     "Furniture",
//   ],
//   Men: ["Casual", "Official", "Trousers", "Beachware", "Footwear", "Jewelry", "Tops", "Bags"],
//   Women: ["Casual", "Official", "Tops", "Bags", "Jewelry", "Footwear"],
//   Kids: ["Casual", "Tops", "Footwear", "Bags", "Jewelry", "Beachwear"],
//   Curve: ["Casual dress", "Tops", "Footwear", "Bags", "Jewelry", "Beachwear"],
//   Home: ["Furniture", "Decor", "Kitchenware", "Bedding", "Lighting"],
// };

// export default function CategoryScreen({ navigation }) {
//   const [activeMain, setActiveMain] = useState("All");
//   const [activeSub, setActiveSub] = useState(subcategories["All"][0]);

//   const currentSubcategories = useMemo(
//     () => subcategories[activeMain] || [],
//     [activeMain]
//   );

//   const handleMainChange = (main) => {
//     const newSubList = subcategories[main];
//     setActiveMain(main);
//     setActiveSub(newSubList?.[0] || "");
//   };

//   const handleSubChange = (item) => {
//     if (item !== activeSub) {
//       setActiveSub(item);
//     }
//   };

//   return (
//     <View style={{ flex: 1, backgroundColor: "#fff" }}>
//       {/* Top Navigation */}
//       <TopNav activeTab={activeMain} onTabChange={handleMainChange} />

//       {/* Subcategory Scroll */}
//       <View
//         style={{
//           borderTopWidth: 1,
//           borderTopColor: "#eee",
//           backgroundColor: "#faf9fd",
//           paddingVertical: 8,
//           paddingBottom: 12,
//         }}
//       >
//         <ScrollView
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           contentContainerStyle={{
//             paddingHorizontal: 10,
//             alignItems: "center",
//           }}
//         >
//           {currentSubcategories.length > 0 ? (
//             currentSubcategories.map((item) => (
//               <TouchableOpacity
//                 key={item}
//                 onPress={() => handleSubChange(item)}
//                 style={{
//                   paddingVertical: 8,
//                   paddingHorizontal: 18,
//                   backgroundColor:
//                     activeSub === item ? "#7f00ff" : "transparent",
//                   borderRadius: 20,
//                   marginRight: 10,
//                   borderWidth: activeSub === item ? 0 : 1,
//                   borderColor: activeSub === item ? "transparent" : "#e0e0e0",
//                 }}
//               >
//                 <Text
//                   style={{
//                     color: activeSub === item ? "#fff" : "#7F55B1",
//                     fontWeight: activeSub === item ? "bold" : "600",
//                     fontSize: 15,
//                   }}
//                 >
//                   {item.trim()}
//                 </Text>
//               </TouchableOpacity>
//             ))
//           ) : (
//             <Text
//               style={{
//                 paddingHorizontal: 16,
//                 fontStyle: "italic",
//                 color: "#aaa",
//               }}
//             >
//               No subcategories found.
//             </Text>
//           )}
//         </ScrollView>
//       </View>

//       {/* Product List */}
//       <View style={{ flex: 1 }}>
//         <ProductListComponent
//           navigation={navigation}
//           mainCategory={activeMain}
//           subCategory={activeSub}
//         />
//       </View>
//     </View>
//   );
// }


///////////////////////////////////////
///////////////////////////////////////


// import React, { useState, useMemo } from "react";
// import { View, Text, TouchableOpacity, ScrollView } from "react-native";
// import TopNav from "../components/TopNav";
// import ProductListComponent from "../components/ProductListComponent";
// import { PRODUCTS } from '../src/data/products';

// const subcategories = {
//   All: [
//     "Official dress", "Casual dress", "Beachwear", "Sportswear", "Nightwear",
//     "Footwear", "Bags", "Jewelry", "Electronics", "Furniture",
//   ],
//   Men: ["Casual", "Official", "Trousers", "Beachware", "Footwear", "Jewelry", "Tops", "Bags"],
//   Women: ["Casual", "Official", "Tops", "Bags", "Jewelry", "Footwear"],
//   Kids: ["Casual", "Tops", "Footwear", "Bags", "Jewelry", "Beachwear"],
//   Curve: ["Casual dress", "Tops", "Footwear", "Bags", "Jewelry", "Beachwear"],
//   Home: ["Furniture", "Decor", "Kitchenware", "Bedding", "Lighting"],
// };

// export default function CategoryScreen({ navigation }) {
//   const [activeMain, setActiveMain] = useState("All");
//   const [activeSub, setActiveSub] = useState(subcategories["All"][0]);
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   const currentSubcategories = useMemo(
//     () => subcategories[activeMain] || [],
//     [activeMain]
//   );

//   const handleMainChange = (main) => {
//     const newSubList = subcategories[main];
//     setActiveMain(main);
//     setActiveSub(newSubList?.[0] || "");
//     setFilteredProducts([]); // clear search results
//   };

//   const handleSubChange = (item) => {
//     setActiveSub(item);
//     setFilteredProducts([]);
//   };

//   const handleSearch = (text) => {
//     if (text === '') {
//       setFilteredProducts([]);
//     } else {
//       const results = PRODUCTS.filter(
//         (product) =>
//           product.category === activeMain &&
//           product.subcategory === activeSub &&
//           product.name.toLowerCase().includes(text.toLowerCase())
//       );
//       setFilteredProducts(results);
//     }
//   };

//   return (
//     <View style={{ flex: 1, backgroundColor: "#fff" }}>
//       <TopNav activeTab={activeMain} onTabChange={handleMainChange} onSearch={handleSearch} />

//       {/* Subcategory Scroll */}
//       <View style={{
//         borderTopWidth: 1,
//         borderTopColor: "#eee",
//         backgroundColor: "#faf9fd",
//         paddingVertical: 8,
//         paddingBottom: 12,
//       }}>
//         <ScrollView
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           contentContainerStyle={{
//             paddingHorizontal: 10,
//             alignItems: "center",
//           }}
//         >
//           {currentSubcategories.length > 0 ? (
//             currentSubcategories.map((item) => (
//               <TouchableOpacity
//                 key={item}
//                 onPress={() => handleSubChange(item)}
//                 style={{
//                   paddingVertical: 8,
//                   paddingHorizontal: 18,
//                   backgroundColor: activeSub === item ? "#7f00ff" : "transparent",
//                   borderRadius: 20,
//                   marginRight: 10,
//                   borderWidth: activeSub === item ? 0 : 1,
//                   borderColor: activeSub === item ? "transparent" : "#e0e0e0",
//                 }}
//               >
//                 <Text
//                   style={{
//                     color: activeSub === item ? "#fff" : "#7F55B1",
//                     fontWeight: activeSub === item ? "bold" : "600",
//                     fontSize: 15,
//                   }}
//                 >
//                   {item.trim()}
//                 </Text>
//               </TouchableOpacity>
//             ))
//           ) : (
//             <Text style={{
//               paddingHorizontal: 16,
//               fontStyle: "italic",
//               color: "#aaa",
//             }}>
//               No subcategories found.
//             </Text>
//           )}
//         </ScrollView>
//       </View>

//       {/* Product List */}
//       <View style={{ flex: 1 }}>
//         <ProductListComponent
//           navigation={navigation}
//           mainCategory={activeMain}
//           subCategory={activeSub}
//           products={filteredProducts.length > 0 ? filteredProducts : undefined}
//         />
//       </View>
//     </View>
//   );
// }



//////////////////////////////////////
///////////////////////////////////////////

import React, { useState, useMemo } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import TopNav from '../components/TopNav';
import ProductListComponent from '../components/ProductListComponent';

const subcategories = {
  All: [
    "Official dress",
    "Casual dress",
    "Beachwear",
    "Sportswear",
    "Nightwear",
    "Footwear",
    "Bags",
    "Jewelry",
    "Electronics",
    "Furniture",
  ],
  Men: ["Casual", "Official", "Trousers", "Beachware", "Footwear", "Jewelry", "Tops", "Bags"],
  Women: ["Casual", "Official", "Tops", "Bags", "Jewelry", "Footwear"],
  Kids: ["Casual", "Tops", "Footwear", "Bags", "Jewelry", "Beachwear"],
  Curve: ["Casual dress", "Tops", "Footwear", "Bags", "Jewelry", "Beachwear"],
  Home: ["Furniture", "Decor", "Kitchenware", "Bedding", "Lighting"],
};

export default function CategoryScreen({ navigation }) {
  const [activeMain, setActiveMain] = useState("All");
  const [activeSub, setActiveSub] = useState(subcategories["All"][0]);

  const currentSubcategories = useMemo(
    () => subcategories[activeMain] || [],
    [activeMain]
  );

  const handleMainChange = (main) => {
    const newSubList = subcategories[main];
    setActiveMain(main);
    setActiveSub(newSubList?.[0] || "");
  };

  const handleSubChange = (item) => {
    if (item !== activeSub) {
      setActiveSub(item);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <TopNav activeTab={activeMain} onTabChange={handleMainChange} />

      <View
        style={{
          borderTopWidth: 1,
          borderTopColor: "#eee",
          backgroundColor: "#faf9fd",
          paddingVertical: 8,
          paddingBottom: 12,
        }}
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 10,
            alignItems: "center",
          }}
        >
          {currentSubcategories.length > 0 ? (
            currentSubcategories.map((item) => (
              <TouchableOpacity
                key={item}
                onPress={() => handleSubChange(item)}
                style={{
                  paddingVertical: 8,
                  paddingHorizontal: 18,
                  backgroundColor: activeSub === item ? "#7f00ff" : "transparent",
                  borderRadius: 20,
                  marginRight: 10,
                  borderWidth: activeSub === item ? 0 : 1,
                  borderColor: activeSub === item ? "transparent" : "#e0e0e0",
                }}
              >
                <Text
                  style={{
                    color: activeSub === item ? "#fff" : "#7F55B1",
                    fontWeight: activeSub === item ? "bold" : "600",
                    fontSize: 15,
                  }}
                >
                  {item.trim()}
                </Text>
              </TouchableOpacity>
            ))
          ) : (
            <Text
              style={{
                paddingHorizontal: 16,
                fontStyle: "italic",
                color: "#aaa",
              }}
            >
              No subcategories found.
            </Text>
          )}
        </ScrollView>
      </View>

      <View style={{ flex: 1 }}>
        <ProductListComponent
          navigation={navigation}
          mainCategory={activeMain}
          subCategory={activeSub}
        />
      </View>
    </View>
  );
}




// import React, { useState, useMemo } from "react";
// import { View, Text, TouchableOpacity, ScrollView } from "react-native";
// import TopNav from "../components/TopNav";
// import ProductListComponent from "../components/ProductListComponent";

// const subcategories = {
//   All: [
//     "Official dress",
//     "Casual dress",
//     "Beachwear",
//     "Sportswear",
//     "Nightwear",
//     "Footwear",
//     "Bags",
//     "Jewelry",
//     "Electronics",
//     "Furniture",
//   ],
//   Men: ["Casual", "Official", "Trousers", "Beachware", "Footwear", "Jewelry", "Tops", "Bags"],
//   Women: ["Casual", "Official", "Tops", "Bags", "Jewelry", "Footwear"],
//   Kids: ["Casual", "Tops", "Footwear", "Bags", "Jewelry", "Beachwear"],
//   Curve: ["Casual dress", "Tops", "Footwear", "Bags", "Jewelry", "Beachwear"],
//   Home: ["Furniture", "Decor", "Kitchenware", "Bedding", "Lighting"],
// };

// export default function CategoryScreen({ navigation }) {
//   const [activeMain, setActiveMain] = useState("All");
//   const [activeSub, setActiveSub] = useState(subcategories["All"][0]);

//   const currentSubcategories = useMemo(
//     () => subcategories[activeMain] || [],
//     [activeMain]
//   );

//   const handleMainChange = (main) => {
//     const newSubList = subcategories[main];
//     setActiveMain(main);
//     setActiveSub(newSubList?.[0] || "");
//   };

//   const handleSubChange = (item) => {
//     if (item !== activeSub) {
//       setActiveSub(item);
//     }
//   };

//   return (
//     <View style={{ flex: 1, backgroundColor: "#fff" }}>
//       {/* Top Navigation */}
//       <TopNav activeTab={activeMain} onTabChange={handleMainChange} />

//       {/* Subcategory Scroll */}
//       <View
//         style={{
//           borderTopWidth: 1,
//           borderTopColor: "#eee",
//           backgroundColor: "#faf9fd",
//           paddingVertical: 8,
//           paddingBottom: 12,
//         }}
//       >
//         <ScrollView
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           contentContainerStyle={{
//             paddingHorizontal: 10,
//             alignItems: "center",
//           }}
//         >
//           {currentSubcategories.length > 0 ? (
//             currentSubcategories.map((item) => (
//               <TouchableOpacity
//                 key={item}
//                 onPress={() => handleSubChange(item)}
//                 style={{
//                   paddingVertical: 8,
//                   paddingHorizontal: 18,
//                   backgroundColor:
//                     activeSub === item ? "#7f00ff" : "transparent",
//                   borderRadius: 20,
//                   marginRight: 10,
//                   borderWidth: activeSub === item ? 0 : 1,
//                   borderColor: activeSub === item ? "transparent" : "#e0e0e0",
//                 }}
//               >
//                 <Text
//                   style={{
//                     color: activeSub === item ? "#fff" : "#7F55B1",
//                     fontWeight: activeSub === item ? "bold" : "600",
//                     fontSize: 15,
//                   }}
//                 >
//                   {item.trim()}
//                 </Text>
//               </TouchableOpacity>
//             ))
//           ) : (
//             <Text
//               style={{
//                 paddingHorizontal: 16,
//                 fontStyle: "italic",
//                 color: "#aaa",
//               }}
//             >
//               No subcategories found.
//             </Text>
//           )}
//         </ScrollView>
//       </View>

//       {/* Product List */}
//       <View style={{ flex: 1 }}>
//         <ProductListComponent
//           navigation={navigation}
//           mainCategory={activeMain}
//           subCategory={activeSub}
//         />
//       </View>
//     </View>
//   );
// }



/////////////////////////////////
//////////////////////////////////


// import React, { useState, useMemo } from "react";
// import { View, Text, TouchableOpacity, ScrollView } from "react-native";
// import TopNav from "../components/TopNav";
// import ProductListComponent from "../components/ProductListComponent";

// const subcategories = {
//   All: [
//     "Official dress",
//     "Casual dress",
//     "Beachwear",
//     "Sportswear",
//     "Nightwear",
//     "Footwear",
//     "Bags",
//     "Jewelry",
//     "Electronics",
//     "Furniture",
//   ],
//   Men: ["Casual", "Official", "Trousers", "Beachware", "Footwear", "Jewelry", "Tops", "Bags"],
//   Women: ["Casual", "Official", "Tops", "Bags", "Jewelry", "Footwear"],
//   Kids: ["Casual", "Tops", "Footwear", "Bags", "Jewelry", "Beachwear"],
//   Curve: ["Casual dress", "Tops", "Footwear", "Bags", "Jewelry", "Beachwear"],
//   Home: ["Furniture", "Decor", "Kitchenware", "Bedding", "Lighting"],
// };

// export default function CategoryScreen({ navigation }) {
//   const [activeMain, setActiveMain] = useState("All");
//   const [activeSub, setActiveSub] = useState(subcategories["All"][0]);

//   const currentSubcategories = useMemo(
//     () => subcategories[activeMain] || [],
//     [activeMain]
//   );

//   const handleMainChange = (main) => {
//     const newSubList = subcategories[main];
//     setActiveMain(main);
//     setActiveSub(newSubList?.[0] || "");
//   };

//   const handleSubChange = (item) => {
//     if (item !== activeSub) {
//       setActiveSub(item);
//     }
//   };

//   return (
//     <View style={{ flex: 1, backgroundColor: "#fff" }}>
//       {/* Top Navigation */}
//       <TopNav activeTab={activeMain} onTabChange={handleMainChange} />

//       {/* Subcategory Scroll */}
//       <View
//         style={{
//           borderTopWidth: 1,
//           borderTopColor: "#eee",
//           backgroundColor: "#faf9fd",
//           paddingVertical: 8,
//           paddingBottom: 12,
//         }}
//       >
//         <ScrollView
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           contentContainerStyle={{
//             paddingHorizontal: 10,
//             alignItems: "center",
//           }}
//         >
//           {currentSubcategories.length > 0 ? (
//             currentSubcategories.map((item) => (
//               <TouchableOpacity
//                 key={item}
//                 onPress={() => handleSubChange(item)}
//                 style={{
//                   paddingVertical: 8,
//                   paddingHorizontal: 18,
//                   backgroundColor:
//                     activeSub === item ? "#7f00ff" : "transparent",
//                   borderRadius: 20,
//                   marginRight: 10,
//                   borderWidth: activeSub === item ? 0 : 1,
//                   borderColor: activeSub === item ? "transparent" : "#e0e0e0",
//                 }}
//               >
//                 <Text
//                   style={{
//                     color: activeSub === item ? "#fff" : "#7F55B1",
//                     fontWeight: activeSub === item ? "bold" : "600",
//                     fontSize: 15,
//                   }}
//                 >
//                   {item.trim()}
//                 </Text>
//               </TouchableOpacity>
//             ))
//           ) : (
//             <Text
//               style={{
//                 paddingHorizontal: 16,
//                 fontStyle: "italic",
//                 color: "#aaa",
//               }}
//             >
//               No subcategories found.
//             </Text>
//           )}
//         </ScrollView>
//       </View>

//       {/* Product List */}
//       <View style={{ flex: 1 }}>
//         <ProductListComponent
//           navigation={navigation}
//           mainCategory={activeMain}
//           subCategory={activeSub}
//         />
//       </View>
//     </View>
//   );
// }
