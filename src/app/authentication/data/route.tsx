import mainLink from '@/MainLink';
import {TypeUser} from '@/Types';
let users: TypeUser[] = [
    {
        userName: 'Mira',
        password: 'helloWorld',
        email: 'mohiramansurovna07@gmail.com',
        photoURL:'https://files.edgestore.dev/2buizor9f52z0fnh/myPublicImages/_public/3fcfb0e7-c5e3-43f1-a295-768f922172df.jpg',
        saved: {
            js: [
                ['10', '2'],
                ['12', '5'],
            ],
            react: [['1', '1']],
            next: [['7', '5']],
        },
    },
    {
        userName: 'Muhayyo',
        password: '1',
        email: 'hello@gamil.com',
        photoURL:'sample',
        saved: {
            js: [
                ['10', '2'],
                ['12', '5'],
            ],
            react: [['1', '1']],
            next: [['7', '5']],
        },
    },
];
import {NextRequest, NextResponse} from 'next/server';
export async function GET(request: NextRequest) {
    const auth = request.headers.get('Authorization');
    if (auth == '"icantopenwithoutit"') {
        const searchParams = request.nextUrl.searchParams;
        const userName = searchParams.get('user');
        return userName
            ? NextResponse.json(users.filter((user) => user.userName === userName)[0])
            : NextResponse.json(users);
    } else {
        return NextResponse.json('403, sorry but u are not allowed to open this page');
    }
}
export async function POST(request: NextRequest) {
    const finished = await request.json();
    const auth = request.headers.get('Authorization');
    if (auth == '"icantopenwithoutit"') {
        users.push(finished);
    } else {
        return NextResponse.json('403, sorry but u are not allowed to change this page');
    }
}
export async function DELETE(request: NextRequest) {
    const userName = await request.json();
    const auth = request.headers.get('Authorization');
    if (auth == '"icantopenwithoutit"') {
        users = users.filter((user) => user.userName !== userName);
        return NextResponse.json(users);
    } else {
        return NextResponse.json('403, sorry but u are not allowed to change this page');
    }
}

export async function PUT(request: NextRequest) {
    const [userName, topicType, topicId, score] = await request.json();
    const auth = request.headers.get('Authorization');
    if (auth == '"icantopenwithoutit"') {
        const user = users.map((user) => {
            if (user.userName === userName) {
                const index = users.indexOf(user);
                switch (topicType) {
                    case 'js':
                        users[index].saved.js.push([topicId, score]);
                        break;

                    case 'react':
                        users[index].saved.react.push([topicId, score]);
                        break;

                    case 'next':
                        users[index].saved.next.push([topicId, score]);
                        break;
                }
                return user;
            } else {
                throw new Error('user not found| 404');
            }
        });
        return NextResponse.json('user is modified');
    } else {
        return NextResponse.json("404 sorry u can't see this page");
    }
}
