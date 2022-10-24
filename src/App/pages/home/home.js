import Card from "../../components/card/card";
import RecommendedCard from "../../components/recommendedCard/recommendedCard";
import Drawer from "../../components/drawer/drawer";

export default function Home() {
    return (
        <main>
            <Card></Card>
            <RecommendedCard></RecommendedCard>
            <Drawer></Drawer>
        </main>
    );
}