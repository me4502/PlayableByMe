import type { PropsWithChildren, ReactNode } from 'react';

export default function RootLayout({
    children,
}: PropsWithChildren<unknown>): ReactNode {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
