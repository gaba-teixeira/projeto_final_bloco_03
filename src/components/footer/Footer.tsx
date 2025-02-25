import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

function Footer() {
  let data = new Date().getFullYear();

  return (
    <>
      <div className="flex justify-center text-white bg-indigo-900">
        <div className="container flex flex-col items-center py-4">
          <p className="text-lg font-bold">
            Farmácia React | Copyright: {data}
          </p>
          <p className="text-base">Acesse nossas redes sociais</p>
          <div className="flex gap-2">
            <a href="" target="_blank">
              <LinkedinLogo size={38} weight="bold" />
            </a>
            <a href="" target="_blank">
              <InstagramLogo size={38} weight="bold" />
            </a>
            <a href="" target="_blank">
              <FacebookLogo size={38} weight="bold" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
