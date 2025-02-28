import { Card, CardHeader, CardBody, Image } from "@heroui/react";
import { FC } from "react";

interface ProfileDes {
    imageUrl: string,
    name: string,
    occupation: string
}

export const Profile: FC<ProfileDes> = ({ imageUrl, name, occupation }) => {
    return (
        <Card className="py-2">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={imageUrl}
                    width={270}
                />
            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <p className="text-tiny uppercase font-bold">{name}</p>
                <small className="text-default-500">{occupation}</small>

            </CardBody>
        </Card>
    );
}
