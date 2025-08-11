export const formatAsset = (asset: number) => {
    const formattedAsset = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'PHP' }).format(asset)
    return formattedAsset
}

export const formatDate = (date: string) => {
    const dateObj = new Date(date)
    const formattedDate = dateObj.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    return formattedDate
}