import { Button, IButtonProps } from "native-base";
import { ReactNode } from "react";

interface ButtonProps extends IButtonProps {
    children: ReactNode;
    autosize?: boolean;
    color?: string;
}

export function Botao({ children, autosize = false, color, ...rest }: ButtonProps) {
    return (
        <>
            <Button mt={10} w={autosize ? 'auto' : '100%'} bg={color || 'blue.800'} borderRadius={'lg'} _text={{ color: 'white' }} {...rest}>{children}</Button>
        </>
    );
}