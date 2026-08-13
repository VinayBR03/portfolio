export function scrollToSection(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export async function openPopup(url: string) {
  if (!url) return

  const width = 800
  const height = 700
  const left = (window.screen.width / 2) - (width / 2)
  const top = (window.screen.height / 2) - (height / 2)
  window.open(
    url,
    '_blank',
    `width=${width},height=${height},top=${top},left=${left},resizable=yes,scrollbars=yes,noopener,noreferrer`,
  )
}

export async function openBase64Popup(base64Data: string) {
  if (!base64Data) return

  // Clean the string if it contains the data URI prefix
  const cleanBase64 = base64Data.replace(/^data:application\/pdf;base64,/, '')

  // Convert Base64 to a Blob
  const byteCharacters = atob(cleanBase64)
  const byteNumbers = new Array(byteCharacters.length)
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i)
  }
  const byteArray = new Uint8Array(byteNumbers)
  const blob = new Blob([byteArray], { type: 'application/pdf' })

  // Create a temporary, secure URL for the blob
  const blobUrl = URL.createObjectURL(blob)

  const width = 800
  const height = 700
  const left = (window.screen.width / 2) - (width / 2)
  const top = (window.screen.height / 2) - (height / 2)

  const popup = window.open(
    blobUrl,
    '_blank',
    `width=${width},height=${height},top=${top},left=${left},resizable=yes,scrollbars=yes`,
  )

  // FIX: Monitor the popup closing from the main window instead of 'unload'
  if (popup) {
    const timer = setInterval(() => {
      if (popup.closed) {
        clearInterval(timer)
        URL.revokeObjectURL(blobUrl) // Safely clean up memory here
      }
    }, 1000)
  }
}
