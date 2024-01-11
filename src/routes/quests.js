import QuestPad from "../components/QuestPad";

export default function Dashboard() {
  return (
    <div className="page">
      <h2>Quests</h2>
      <h4>General despre questuri</h4>
      <ul>
        <li>
          Un queste este un Quest Pad fizic continand toate itemele, montrii,
          etc pe pad
        </li>
        <li>
          Cand se extrage un qest toate itemele, creaturile,etc, de pe acel
          quest pad se vor indeparta de pe pad si se vor amesteca cu item and
          creatures container of that realm/tile, ma refer aicea ca idee existe
          un container pentru fiecare tile care sa contina toate createturile si
          iteme descoperibile si egale cu numarul de patratele de pe un tile.{" "}
        </li>
        <li>
          Cand cand se trage o care pe care scrie, a data peste un montru sau un
          item, tragi o creatura sau un item din containerul de iteme sau
          creaturi al tileului respectiv si daca face parte din quest atunci il
          aplaseszi pe pad.
        </li>
      </ul>
      <QuestPad />
    </div>
  );
}
