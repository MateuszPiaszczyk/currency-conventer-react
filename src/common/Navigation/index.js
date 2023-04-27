import { toAuthor, toCurrencyConventer } from "../../routes";
import { Item, List, StyledNavigation, StyledNavLink } from "./styled";

export const Navigation = () => {
    return (
        <StyledNavigation>
            <List>
                <Item>
                    <StyledNavLink to={toCurrencyConventer()}>
                        Przelicznik Walut
                    </StyledNavLink>
                </Item>
                <Item>
                    <StyledNavLink to={toAuthor()}>
                        o Autorze
                    </StyledNavLink>
                </Item>
            </List>
        </StyledNavigation>
    );
};