import { unstable_noStore } from "next/cache";

const mockData: {
  [key: string]: { name: string; image: string }[];
} = {
  "1": [
    {
      name: "Honey Garlic Shrimp",
      image:
        "https://files.edgestore.dev/jzlfvcbfhm181ocy/img/_public/m3oflvgwjrx42uew-honey-garlic-shrimp.webp",
    },
    {
      name: "Eggplant and Spinach Lasagna",
      image:
        "https://files.edgestore.dev/jzlfvcbfhm181ocy/img/_public/c19f2c69-e6e0-4703-b8e9-3beb4c2679de.webp",
    },
    {
      name: "Creamy Tomato and Basil Pasta",
      image:
        "https://files.edgestore.dev/jzlfvcbfhm181ocy/img/_public/17dbce5c-3c8f-4b49-b212-df12f0db2106.webp",
    },
    {
      name: "Lime Grilled Chicken with Avocado Salsa",
      image:
        "https://files.edgestore.dev/jzlfvcbfhm181ocy/img/_public/c4a61c97-3a7d-4df9-9c8b-e67f25d6b4a3.webp",
    },
    {
      name: "Savory Cardamom Rice with Nuts and Raisins",
      image:
        "https://files.edgestore.dev/jzlfvcbfhm181ocy/img/_public/c2ac6018-30dc-457c-8eea-7673e00c5941.webp",
    },
    {
      name: "Fennel and Orange Salad with Pomegranate",
      image:
        "https://files.edgestore.dev/jzlfvcbfhm181ocy/img/_public/fe3efc4b-5cda-4390-9494-84f3259a1cad.webp",
    },
    {
      name: "Coconut Curry Lentil Bowl",
      image:
        "https://files.edgestore.dev/jzlfvcbfhm181ocy/img/_public/93918725-deb5-4222-a4c5-40df0be9fb59.webp",
    },
    {
      name: "Buffalo Cauliflower Tacos",
      image:
        "https://files.edgestore.dev/jzlfvcbfhm181ocy/img/_public/734a5ef3-072f-4952-a8d0-21424df47118.webp",
    },
    {
      name: "Grilled Peach and Arugula Salad",
      image:
        "https://files.edgestore.dev/jzlfvcbfhm181ocy/img/_public/048610af-daae-48a1-9958-c7df0a9c30b7.webp",
    },
  ],
  "2": [
    {
      name: "Roasted Beet and Feta Quinoa Bowl",
      image:
        "https://files.edgestore.dev/jzlfvcbfhm181ocy/img/_public/2432ec12-1cf7-466f-b781-858e11ed66dd.webp",
    },
    {
      name: "Spicy Kimchi Fried Rice",
      image:
        "https://files.edgestore.dev/jzlfvcbfhm181ocy/img/_public/455d3079-d95c-4d94-ad00-8f967d925f1f.webp",
    },
    {
      name: "Thai Mango Salad with Peanut Dressing",
      image:
        "https://files.edgestore.dev/jzlfvcbfhm181ocy/img/_public/bd937375-7028-4a64-b344-01abf1e90b69.webp",
    },
    {
      name: "Spaghetti Aglio e Olio",
      image:
        "https://files.edgestore.dev/jzlfvcbfhm181ocy/img/_public/69d4e738-6060-42af-8bf0-e34942dd9d75.webp",
    },
    {
      name: "Stuffed Sweet Potatoes with Chickpeas and Tahini Sauce",
      image:
        "https://files.edgestore.dev/jzlfvcbfhm181ocy/img/_public/72625614-547b-4e54-8581-77f7ba6c2ebd.webp",
    },
    {
      name: "Caribbean Jerk Chicken Tacos",
      image:
        "https://files.edgestore.dev/jzlfvcbfhm181ocy/img/_public/647b4cb6-7dc5-4583-a190-2039390db9b6.webp",
    },
    {
      name: "Creamy Avocado Pasta",
      image:
        "https://files.edgestore.dev/jzlfvcbfhm181ocy/img/_public/9a386bec-0288-4002-8dfb-19aecd05a5f0.webp",
    },
    {
      name: "Roasted Vegetable and Feta Salad",
      image:
        "https://files.edgestore.dev/jzlfvcbfhm181ocy/img/_public/24cb3e28-00bd-439a-9d50-9e6c9eb8719f.webp",
    },
    {
      name: "Zucchini Noodles with Pesto",
      image:
        "https://files.edgestore.dev/jzlfvcbfhm181ocy/img/_public/m3ofj2o13v2bkrzl-zucchini-noodles-with-pesto.webp",
    },
  ],
  "3": [
    {
      name: "Creamy Mushroom Risotto",
      image:
        "https://files.edgestore.dev/jzlfvcbfhm181ocy/img/_public/m3ofji6lvr57iwh8-creamy-mushroom-risotto.webp",
    },
    {
      name: "North African Spiced Carrot and Chickpea Salad",
      image:
        "https://files.edgestore.dev/jzlfvcbfhm181ocy/img/_public/acd4b311-8f97-4e56-a3f9-4b4dffbae757.webp",
    },
    {
      name: "Baked Lemon Herb Salmon",
      image:
        "https://files.edgestore.dev/jzlfvcbfhm181ocy/img/_public/m3ofkr9u9tzj12oy-baked-lemon-herb-salmon.webp",
    },
    {
      name: "Szechuan Tofu with Broccoli",
      image:
        "https://files.edgestore.dev/jzlfvcbfhm181ocy/img/_public/596fff60-f2a3-4422-8d40-e3557d7727f1.webp",
    },
    {
      name: "Caprese Stuffed Avocados",
      image:
        "https://files.edgestore.dev/jzlfvcbfhm181ocy/img/_public/m3ofjstkx82vxo3p-caprese-stuffed-avocados.webp",
    },
    {
      name: "Chickpea Curry",
      image:
        "https://files.edgestore.dev/jzlfvcbfhm181ocy/img/_public/m3ofk540n5vm62cl-chickpea-curry.webp",
    },
    {
      name: "Maple Glazed Brussels Sprouts and Apples",
      image:
        "https://files.edgestore.dev/jzlfvcbfhm181ocy/img/_public/1ba0292a-5571-49fa-918c-05ff720668d9.webp",
    },
    {
      name: "Korean BBQ Meatballs",
      image:
        "https://files.edgestore.dev/jzlfvcbfhm181ocy/img/_public/9d3b5c0e-00fb-40eb-9f59-09ae8822e8ae.webp",
    },
    {
      name: "Chilled Avocado and Cucumber Soup",
      image:
        "https://files.edgestore.dev/jzlfvcbfhm181ocy/img/_public/77b18b08-ecd1-48c9-aa62-8bb3443b140a.webp",
    },
  ],
};

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  unstable_noStore(); // force dynamic
  const { id } = await params;
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (!mockData[id]) {
    return new Response("Not found", { status: 404 });
  }

  return new Response(JSON.stringify(mockData[id]), {
    headers: { "content-type": "application/json" },
  });
}
