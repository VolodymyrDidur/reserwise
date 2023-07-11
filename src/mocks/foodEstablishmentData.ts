interface IDetailsInstitution {
    categories: string[];
    countryCuisines: string[];
    features: string[];
}

interface FoodEstablishmentDataProps {
    id: number;
    name: string;
    description: string;
    images: string[];
    details: IDetailsInstitution;
    phoneNumber: string;
    address: string;
    workingHours: string;
}

export const foodEstablishmentData: FoodEstablishmentDataProps[] = [
    {
        id: 1,
        name: "Café de Paris",
        description: "Cozy café offering a variety of delicious pastries and coffee.",
        images: ["https://picsum.photos/id/42/800/500", "https://picsum.photos/id/163/800/500", "https://picsum.photos/id/225/800/500"],
        details: {
            categories: ["Cafe", "Bakery"],
            countryCuisines: ["French", "European"],
            features: ["Outdoor Seating", "Free Wi-Fi"]
        },
        phoneNumber: "+1234567890",
        address: "123 Main Street, New York, NY 10001, USA",
        workingHours:
            "Mon: 8:00 - 18:00\n" +
            "Tue: 8:00 - 18:00\n" +
            "Wed: 8:00 - 18:00\n" +
            "Thu: 8:00 - 18:00\n" +
            "Fri: 8:00 - 18:00\n" +
            "Sat: 9:00 - 17:00\n" +
            "Sun: 10:00 - 15:00"
    },
    {
        id: 2,
        name: "Pizza Hut",
        description: "Famous pizza chain serving a variety of delicious pizzas and sides.",
        images: ["https://picsum.photos/id/292/800/500", "https://picsum.photos/id/431/800/500", "https://picsum.photos/id/635/800/500"],
        details: {
            categories: ["Fastfood", "Pizza"],
            countryCuisines: ["Italian", "American"],
            features: ["Delivery", "Online Ordering"]
        },
        phoneNumber: "+987654321",
        address: "456 Elm Avenue, Los Angeles, CA 90001, USA",
        workingHours:
            "Mon: 8:00 - 18:00\n" +
            "Tue: 8:00 - 18:00\n" +
            "Wed: 8:00 - 18:00\n" +
            "Thu: 8:00 - 18:00\n" +
            "Fri: 8:00 - 18:00\n" +
            "Sat: 9:00 - 17:00\n" +
            "Sun: 10:00 - 15:00"
    },
    {
        id: 3,
        name: "Sushi Express",
        description: "Authentic Japanese sushi restaurant with a wide selection of sushi rolls.",
        images: ["https://picsum.photos/id/42/800/500", "https://picsum.photos/id/163/800/500", "https://picsum.photos/id/225/800/500"],
        details: {
            categories: ["Sushi"],
            countryCuisines: ["Japanese"],
            features: ["Takeout", "All-You-Can-Eat"]
        },
        phoneNumber: "+1234567890",
        address: "456 Elm Avenue, Los Angeles, CA 90001, USA",
        workingHours:
            "Mon: 8:00 - 18:00\n" +
            "Tue: 8:00 - 18:00\n" +
            "Wed: 8:00 - 18:00\n" +
            "Thu: 8:00 - 18:00\n" +
            "Fri: 8:00 - 18:00\n" +
            "Sat: 9:00 - 17:00\n" +
            "Sun: 10:00 - 15:00"
    },
    {
        id: 4,
        name: "Taco Fiesta",
        description: "Vibrant Mexican restaurant serving delicious tacos and authentic Mexican cuisine.",
        images: ["https://picsum.photos/id/292/800/500", "https://picsum.photos/id/431/800/500", "https://picsum.photos/id/635/800/500"],
        details: {
            categories: ["Fastfood"],
            countryCuisines: ["Mexican"],
            features: ["Outdoor Seating", "Happy Hour"]
        },
        phoneNumber: "+987654321",
        address: "456 Elm Avenue, Los Angeles, CA 90001, USA",
        workingHours:
            "Mon: 8:00 - 18:00\n" +
            "Tue: 8:00 - 15:00\n" +
            "Wed: 8:00 - 18:00\n" +
            "Thu: 8:00 - 18:00\n" +
            "Fri: 8:00 - 18:00\n" +
            "Sat: 9:00 - 17:00\n" +
            "Sun: 10:00 - 15:00"
    },
];

export const emojiMap: Record<string, string> = {
    "Cafe": "☕️",
    "Bakery": "🥐",
    "Fastfood": "🍔",
    "Pizza": "🍕",
    "Sushi": "🍣",
    "Japanese": "🇯🇵",
    "Mexican": "🌮",
    "Tacos": "🌮",
    "French": "🇫🇷",
    "European": "🌍",
    "Italian": "🇮🇹",
    "American": "🇺🇸",
    "Outdoor Seating": "🌳",
    "Free Wi-Fi": "📶",
    "Delivery": "🛵",
    "Online Ordering": "💻",
    "Takeout": "🥡",
    "All-You-Can-Eat": "🍣",
    "Happy Hour": "🍹"
};
