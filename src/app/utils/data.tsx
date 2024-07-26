
import ICardProps from "@/app/types/ICardProps";

export const initData: { cardlist: ICardProps[] } = {
    cardlist: [
        {
            title: "My first list",
            items: [
                {
                    title: "My first card",
                    description: "",
                    follow: false
                },
                {
                    title: "My second card",
                    description: "",
                    follow: false
                },
                {
                    title: "Followed card",
                    description: "",
                    follow: true
                }
            ]
        },
        {
            title: "My second list",
            items: [
                {
                    title: "Followed card with description",
                    description: "My first description",
                    follow: true
                }
            ]
        }
    ]
}