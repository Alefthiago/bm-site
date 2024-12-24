//      UTIL.       //
import { Button, Modal } from "flowbite-react";
//     /UTIL.       //


const DatacashModal = (props) => {
    return (
        <Modal dismissible show={props.modalDatacash} onClose={() => props.setModalDatacash(false)}>
            <Modal.Header>Datacash</Modal.Header>
            <Modal.Body>
                <div className="space-y-6">
                    <p className="text-base leading-relaxed text-gray-900">
                        O DATACASH é uma solução integrada para administrar seu negócio. Com ele, você controla desde a compra do produto até o momento da concretização da venda, permitindo o total controle do estoque. O Módulo financeiro do DATACASH permite o gerenciando do contas a pagar e a receber, das contas correntes com acompanhamento em tempo real do resultado operacional da empresa. O software atende a legislação atual, sendo preparado para o PAF-ECF , NFC-E , NF-E , TEF, SPED FISCAL, SPED CONTRIBUIÇÕES, SEF ,E-DOC e SINTEGRA. O DATACASH possui uma interface intuitiva e padronizada que facilita o aprendizado do sistema e permite que se comece a gerar resultados rapidamente. Ele pode ser utilizado em vários computadores ao mesmo tempo, limitando o acesso de cada usuário de acordo com a sua função. Agende uma visita como o nosso departamento comercial através do telefone (81) 3126-2050 ou envie um email para comercial@bminformatica.com.br.
                    </p>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button color="gray" onClick={() => props.setModalDatacash(false)}>
                    Voltar
                </Button>
                <Button onClick={() => props.setModalDatacash(false)}>
                    Contato
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DatacashModal;