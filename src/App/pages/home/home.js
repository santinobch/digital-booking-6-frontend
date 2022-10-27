import Card from "../../components/card/card";
import RecommendedCard from "../../components/recommendedCard/recommendedCard";
import Drawer from "../../components/drawer/drawer";
import Datepicker from "../../components/datepicker/datepicker";
import Button from "../../components/button/button";


export default function Home() {
    return (
        <main>
            <Card></Card>
            <RecommendedCard></RecommendedCard>
            {/* <Drawer></Drawer> */}
            <Datepicker/>
            <Button style="light" width="300px">Light</Button>
            <Button style="dark" width="300px">Light</Button>
        </main>
    );
}