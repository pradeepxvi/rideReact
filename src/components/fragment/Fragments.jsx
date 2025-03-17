import FragmentStore from "../../store/FragmentStore";
import AddItem from "./AddItem";
import DeleteAll from "./DeleteAll";
import DisplayFood from "./DisplayFood";
import OnEmpty from "./OnEmpty";

const Fragments = () => {
  return (
    <>
      <FragmentStore>
        <AddItem />
        <OnEmpty />
        <DisplayFood />
        <DeleteAll />
      </FragmentStore>
    </>
  );
};

export default Fragments;
