import Card from "../../components/card/card";
import RecommendedCard from "../../components/recommendedCard/recommendedCard";
import Drawer from "../../components/drawer/drawer";
import { SearchBar } from '../../components/inputs/select/SearchBar';

export default function Home() {
    return (
        <main>
            <SearchBar/>
            <Card></Card>
            <RecommendedCard></RecommendedCard>
            {/* <Drawer></Drawer> */}
        </main>
    );
}