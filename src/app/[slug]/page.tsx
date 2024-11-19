async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const datas = await params;
    const { slug } = datas;
    return (
        <div>
            Slug is {slug}
        </div>
    );
}

export default Page;