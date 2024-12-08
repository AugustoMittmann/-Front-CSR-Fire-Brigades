import Input from "../components/input";
import Button, { ButtonType } from "../components/button";
import Icons from "../constants/icons";
import Table from "../components/table";
import Select from "../components/select";

function TestComponents() {
  const mockedItems = [
    {key: "1", value: "Item 1"},
    {key: "2", value: "Item 2"},
    {key: "3", value: "Item 3"}
  ];

  return (
    <div style={{backgroundColor: "#F6F6F6", height: "100rem"}}>
      <div style={{margin: "1rem"}}>
        <text style={{color: "black"}}>Testes select</text>
        <br/>
        <Select items={mockedItems}/>
        <br/>
        <Select items={mockedItems} placeholder="Placeholder" disabled={true}/>
      </div>
      <div style={{margin: "1rem"}}>
        <text style={{color: "black"}}>Testes buttons</text>
        <br/>
        <Button placeholder="Placeholder" disabled={false}/>
        <br/>
        <Button placeholder="Placeholder" disabled={true}/>
        <br/>
        <Button placeholder="Placeholder" type={ButtonType.standard} disabled={false}/>
        <br/>
        <Button placeholder="Placeholder" type={ButtonType.standard} disabled={true}/>
        <br/>
        <Button type={ButtonType.standard} disabled={false} firstImage={Icons.adicionar}/>
        <br/>
        <Button type={ButtonType.standard} disabled={false} secondImage={Icons.adicionar}/>
        <br/>
        <Button placeholder="Placeholder" firstImage={Icons.adicionar} secondImage={Icons.adicionar}/>
        <br/>
      </div>
      <div style={{margin: "1rem"}}>
        <text style={{color: "black"}}>Testes table</text>
        <br/>
        <Table columns={["Item", "Qtd.", "Valor estimado"]} rows={[{
          item: "Item 1",
          qtd: 999,
          value: "R$99999,99"
        }, {
          item: "Item 2",
          qtd: 999,
          value: "R$99999,99"
        }, {
          item: "Item 3",
          qtd: 999,
          value: "R$99999,99"
        }]}/>
      </div>
      <div style={{margin: "1rem"}}>
        <text style={{color: "black"}}>Testes inputs</text>
        <br/>
        <Input placeholder="Placeholder" label="Label test"/>
        <br/>
        <Input placeholder="Placeholder" label="Label test" type="email"/>
        <br/>
        <Input placeholder="Desabilitado" disabled={true}/>
        <br/>
      </div>
    </div>
  );
}

export default TestComponents