import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="O igri" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500">
        Ovo je verzija popularne igre Wordle na bosanskom jeziku - {' '}
        <a
          href="https://github.com/elahmo/wordle"
          className="underline font-bold"
        >
          provjeri kod ovdje
        </a>{' '}
        i igraj {' '}
        <a
          href="https://www.powerlanguage.co.uk/wordle/"
          className="underline font-bold"
        >
          originalnu verziju na engleskom ovdje
        </a>. <br /><br />
        Nova riječ svaki dan!
      </p>
    </BaseModal>
  )
}
