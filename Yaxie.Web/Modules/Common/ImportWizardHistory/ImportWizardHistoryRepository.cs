
namespace Yaxie.Common.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using Yaxie.Common.Entities;
    using MyRow = Entities.ImportWizardHistoryRow;

    public class ImportWizardHistoryRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            //SaveResponse saveResponse = new MySaveHandler().Process(uow, request, SaveRequestType.Create);
            //int importWizardId = (int)request.Entity.ImportWizardId;
            //using var connection = SqlConnections.NewFor<ImportWizardRow>();
            //ImportWizardRow importWizardRow = connection.TryById<ImportWizardRow>(importWizardId);
            //importWizardRow.LastRunDate = DateTime.Now;
            //connection.UpdateById(importWizardRow);
            //return saveResponse;
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler().Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow> { }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}