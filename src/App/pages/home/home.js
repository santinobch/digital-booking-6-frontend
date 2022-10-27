import Card from "../../components/card/card";
import RecommendedCard from "../../components/recommendedCard/recommendedCard";
import Drawer from "../../components/drawer/drawer";
import Datepicker from "../../components/datepicker/datepicker";

export default function Home() {
    return (
        <main>
            <Card></Card>
            <RecommendedCard></RecommendedCard>
            {/* <Drawer></Drawer> */}
            <Datepicker/>
        </main>
    );
}