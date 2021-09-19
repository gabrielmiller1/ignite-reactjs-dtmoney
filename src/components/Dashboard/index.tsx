import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";

import { Container } from "../Dashboard/styles";

export function Dashboard() {
    return(
        <Container>
        <Summary />
        <TransactionsTable />
        </Container>
    );
}